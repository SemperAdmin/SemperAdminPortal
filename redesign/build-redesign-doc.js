/* eslint-disable */
/**
 * Builds the Semper Admin Portal Redesign Specification as a .docx.
 *
 * Run from the project root after installing the docx package:
 *   npm install -g docx
 *   node redesign/build-redesign-doc.js
 *
 * Output: redesign/Semper-Admin-Portal-Redesign-Spec.docx
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  TabStopType, TabStopPosition, PageBreak, LevelFormat,
  PageNumber, Footer, Header, TableOfContents,
} = require('docx');

const SCARLET = "C8102E";
const SLATE_900 = "0B0E12";
const SLATE_700 = "2D3748";
const SLATE_500 = "5C6370";
const SLATE_100 = "E2E2DD";
const SURFACE_2 = "F5F5F2";

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.before || 80, after: opts.after || 80, line: 320 },
    alignment: opts.align || AlignmentType.LEFT,
    children: [new TextRun({
      text, font: "Arial", size: opts.size || 22,
      bold: opts.bold || false, italics: opts.italics || false,
      color: opts.color || SLATE_900,
    })],
  });
}

function h(text, level) {
  const sizeMap = { 1: 36, 2: 30, 3: 26 };
  return new Paragraph({
    heading: HeadingLevel[`HEADING_${level}`],
    spacing: { before: level === 1 ? 360 : 240, after: 160, line: 300 },
    children: [new TextRun({
      text, font: "Arial", size: sizeMap[level], bold: true,
      color: level === 1 ? SLATE_900 : SLATE_700,
    })],
  });
}

function eyebrow(text) {
  return new Paragraph({
    spacing: { before: 240, after: 60 },
    children: [new TextRun({
      text: text.toUpperCase(), font: "Arial", size: 16, bold: true,
      color: SCARLET, characterSpacing: 60,
    })],
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { before: 40, after: 40, line: 300 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: SLATE_900 })],
  });
}

function rule() {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    border: { bottom: { color: SCARLET, space: 1, style: BorderStyle.SINGLE, size: 12 } },
    children: [new TextRun({ text: "" })],
  });
}

function tableSimple(headers, rows, columnWidths) {
  const border = { style: BorderStyle.SINGLE, size: 4, color: SLATE_100 };
  const borders = { top: border, bottom: border, left: border, right: border };
  const totalWidth = columnWidths.reduce((s, w) => s + w, 0);
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((heading, i) => new TableCell({
      borders, width: { size: columnWidths[i], type: WidthType.DXA },
      shading: { fill: SURFACE_2, type: ShadingType.CLEAR },
      margins: { top: 100, bottom: 100, left: 140, right: 140 },
      children: [new Paragraph({ children: [new TextRun({
        text: heading.toUpperCase(), font: "Arial", size: 16, bold: true,
        color: SLATE_500, characterSpacing: 40,
      })] })],
    })),
  });
  const dataRows = rows.map(row => new TableRow({
    children: row.map((cell, i) => new TableCell({
      borders, width: { size: columnWidths[i], type: WidthType.DXA },
      margins: { top: 100, bottom: 100, left: 140, right: 140 },
      children: [new Paragraph({ children: [new TextRun({ text: cell, font: "Arial", size: 20, color: SLATE_900 })] })],
    })),
  }));
  return new Table({ width: { size: totalWidth, type: WidthType.DXA }, columnWidths, rows: [headerRow, ...dataRows] });
}

const c = [];

// Cover
c.push(new Paragraph({ spacing: { before: 1600 }, children: [new TextRun({ text: "USMC ADMINISTRATIVE REFERENCE PORTAL", font: "Arial", size: 18, bold: true, color: SCARLET, characterSpacing: 60 })] }));
c.push(new Paragraph({ spacing: { before: 80 }, border: { bottom: { color: SCARLET, space: 1, style: BorderStyle.SINGLE, size: 24 } }, children: [new TextRun({ text: "" })] }));
c.push(new Paragraph({ spacing: { before: 200, after: 200 }, children: [new TextRun({ text: "SEMPER ADMIN PORTAL", font: "Arial", size: 72, bold: true, color: SLATE_900 })] }));
c.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "UI/UX Redesign Specification", font: "Arial", size: 36, color: SLATE_500 })] }));
c.push(new Paragraph({ children: [new PageBreak()] }));

// TOC
c.push(h("Table of Contents", 1));
c.push(rule());
c.push(new TableOfContents("Sections", { hyperlink: true, headingStyleRange: "1-3" }));
c.push(new Paragraph({ children: [new PageBreak()] }));

// Body content (condensed inline; full version in companion .md)
c.push(h("1. Executive Summary", 1));
c.push(rule());
c.push(p("The Semper Admin Portal carries strong content architecture and a clean technical stack. The visible UI lags behind the foundation. This redesign upgrades the portal from utilitarian docs site to authoritative reference portal."));
c.push(eyebrow("Direction"));
c.push(bullet("Aesthetic: sharp military authority with restrained scarlet."));
c.push(bullet("Layout: Mintlify deep-tree sidebar, mobile drawer with bottom tabs, sticky right TOC."));
c.push(bullet("Density: 14px body, 13px UI, 16px card padding, 8-step spacing scale."));
c.push(bullet("Motion: subtle and purposeful, prefers-reduced-motion respected."));
c.push(p("See the companion mockups at redesign/mockups/redesign-preview.html and the full Markdown spec at redesign/Semper-Admin-Portal-Redesign-Spec.md."));

c.push(h("2. Surface Specifications", 1));
c.push(rule());
c.push(p("Detailed surface, component, and roadmap content lives in the companion Markdown file. This Word version is a starting point for stakeholder review and edits in track-changes mode."));

const doc = new Document({
  creator: "Semper Admin Portal",
  title: "Semper Admin Portal Redesign Specification",
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, color: SLATE_900, font: "Arial" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, color: SLATE_900, font: "Arial" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: SLATE_700, font: "Arial" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "SEMPER ADMIN PORTAL  -  Redesign Specification", font: "Arial", size: 16, color: SLATE_500, characterSpacing: 40 })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
      children: [
        new TextRun({ text: "v1.0  -  2026-05-04", font: "Arial", size: 16, color: SLATE_500 }),
        new TextRun({ text: "\t" }),
        new TextRun({ text: "Page ", font: "Arial", size: 16, color: SLATE_500 }),
        new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: SLATE_500 }),
      ],
    })] }) },
    children: c,
  }],
});

const outPath = path.resolve(__dirname, "Semper-Admin-Portal-Redesign-Spec.docx");
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log("Wrote", outPath, buffer.length, "bytes");
});
