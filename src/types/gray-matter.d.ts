declare module 'gray-matter' {
  interface GrayMatterFile<T = Record<string, unknown>> {
    content: string;
    data: T;
    excerpt?: string;
    orig?: Buffer | string;
  }

  interface GrayMatterOptions {
    delimiters?: string | string[];
    language?: string;
    excerpt?: boolean | ((file: GrayMatterFile, options: GrayMatterOptions) => void);
    excerpt_separator?: string;
    engines?: Record<string, unknown>;
    eval?: boolean;
  }

  function matter<T = Record<string, unknown>>(
    input: Buffer | string,
    options?: GrayMatterOptions
  ): GrayMatterFile<T>;

  export = matter;
}
