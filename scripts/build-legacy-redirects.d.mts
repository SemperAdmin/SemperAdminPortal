export const SAFE_PATH: RegExp;
export function buildLegacyRedirects(input: {
  redirects: { from: string; to: string }[];
  pageExists: (urlPath: string) => boolean;
}): string;
export function writeLegacyRedirects(input: {
  publicDir: string;
  includeDir: string;
}): number;
