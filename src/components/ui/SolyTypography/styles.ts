export const variantMap = {
  heroTitle: 'Title',
  pageTitle: 'Title',
  sectionTitle: 'Title',
  body: 'Text',
  bodySmall: 'Text',
  caption: 'Text',
};

export const variantStyles = {
  heroTitle: { fontSize: 26, fontWeight: 700, margin: 0 },
  pageTitle: { fontSize: 22, fontWeight: 700, margin: 0 },
  sectionTitle: { fontSize: 16, fontWeight: 700, margin: 0 },
  body: { fontSize: 16, fontWeight: 400, display: 'block' },
  bodySmall: { fontSize: 14, fontWeight: 400, display: 'block' },
  caption: { fontSize: 12, fontWeight: 400, display: 'block' },
};

export type TypographyVariant = keyof typeof variantMap;
