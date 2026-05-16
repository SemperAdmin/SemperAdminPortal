"use client";

import * as React from "react";
import { Play, Pause, Captions, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill } from "@/components/ui/pill";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Chapter {
  label: string;
  startSeconds: number;
}

export interface VideoEmbedProps {
  title: string;
  description?: string;
  durationSeconds: number;
  videoUrl: string;
  posterUrl?: string;
  chapters?: Chapter[];
  transcript?: string;
  captionsUrl?: string;
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function VideoEmbed({
  title,
  description,
  durationSeconds,
  videoUrl,
  posterUrl,
  chapters = [],
  transcript,
  captionsUrl,
}: VideoEmbedProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [captionsOn, setCaptionsOn] = React.useState(false);
  const [activeChapter, setActiveChapter] = React.useState<number>(-1);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => undefined);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const jumpTo = (s: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = s;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => undefined);
    }
  };

  const restart = () => jumpTo(0);

  const toggleCaptions = () => {
    setCaptionsOn((c) => {
      const v = videoRef.current;
      if (!v) return !c;
      const tracks = v.textTracks;
      for (let i = 0; i < tracks.length; i++) {
        const t = tracks[i];
        if (t) t.mode = !c ? "showing" : "hidden";
      }
      return !c;
    });
  };

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      setCurrentTime(v.currentTime);
      const idx = chapters
        .map((c, i) => ({ c, i }))
        .reverse()
        .find(({ c }) => v.currentTime >= c.startSeconds);
      setActiveChapter(idx?.i ?? -1);
    };
    const onEnded = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnded);
    };
  }, [chapters]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{title}</CardTitle>
          <Pill variant="neutral">{fmt(durationSeconds)}</Pill>
        </div>
        {description && (
          <p className="text-sm text-[var(--color-muted-foreground)]">{description}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative overflow-hidden rounded-[var(--radius-button)] bg-black">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            preload="metadata"
            playsInline
            controls
            crossOrigin="anonymous"
            className="aspect-video w-full"
            aria-label={`Video: ${title}`}
          >
            {captionsUrl && (
              <track
                kind="captions"
                src={captionsUrl}
                srcLang="en"
                label="English captions"
                default
              />
            )}
          </video>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={togglePlay} size="sm" aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            {playing ? "Pause" : "Play"}
          </Button>
          <Button onClick={restart} variant="outline" size="sm" aria-label="Restart">
            <RotateCcw className="size-4" /> Restart
          </Button>
          {captionsUrl && (
            <Button
              onClick={toggleCaptions}
              variant={captionsOn ? "primary" : "outline"}
              size="sm"
              aria-pressed={captionsOn}
            >
              <Captions className="size-4" /> Captions
            </Button>
          )}
          <span className="ml-auto font-mono text-xs text-[var(--color-muted-foreground)]">
            {fmt(currentTime)} / {fmt(durationSeconds)}
          </span>
        </div>

        {chapters.length > 0 && (
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Chapters
            </p>
            <ol className="space-y-1">
              {chapters.map((c, i) => (
                <li key={`${c.label}-${c.startSeconds}`}>
                  <button
                    type="button"
                    onClick={() => jumpTo(c.startSeconds)}
                    className={cn(
                      "flex w-full items-baseline gap-3 rounded-[var(--radius-button)] px-2 py-1 text-left text-sm transition-colors hover:bg-[var(--color-muted)]",
                      activeChapter === i && "bg-[var(--color-muted)] font-semibold"
                    )}
                    aria-current={activeChapter === i ? "true" : undefined}
                  >
                    <span className="w-12 font-mono text-xs text-[var(--color-muted-foreground)]">
                      {fmt(c.startSeconds)}
                    </span>
                    <span className="flex-1">{c.label}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        )}

        {transcript && (
          <details className="group">
            <summary className="cursor-pointer text-sm font-semibold underline-offset-2 hover:underline">
              Transcript
            </summary>
            <div className="mt-2 max-h-72 overflow-y-auto rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-3 text-sm leading-relaxed">
              {transcript.split("\n").map((line, i) => (
                <p key={i} className="my-1">
                  {line}
                </p>
              ))}
            </div>
          </details>
        )}
      </CardContent>
    </Card>
  );
}
