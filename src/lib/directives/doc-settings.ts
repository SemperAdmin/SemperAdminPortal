// SECNAV M-5216.5 compliance constants for naval letter formatting.
// All values are in TWIPs unless noted (1 inch = 1440 TWIPs).
export const DOC_SETTINGS = {
  font: "Times New Roman",
  fontSize: 24, // 12pt
  pageMargins: {
    top: 0,
    bottom: 1440,
    left: 1440,
    right: 1440,
  },
  spacing: {
    after: 120,
  },
  pageSize: {
    width: 12240, // 8.5 inches
    height: 15840, // 11 inches
  },
} as const;

export const TAB_STOPS = {
  first: 720,
  second: 1046,
} as const;

export const INDENTS = {
  subject: 720,
  hanging: 360,
  date: 7920,
  signature: 4680,
} as const;
