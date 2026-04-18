import type { CSSProperties } from 'react';
import type { GlobalToken } from 'antd';

export const variantMap = {
  heroTitle: 'Title',
  pageTitle: 'Title',
  sectionTitle: 'Title',
  body: 'Text',
  bodySmall: 'Text',
  caption: 'Text',
};

export type TypographyVariant = keyof typeof variantMap;

export const getVariantStyles = (
  token: GlobalToken,
): Record<TypographyVariant, CSSProperties> => ({
  heroTitle: { fontSize: 26, fontWeight: 700, margin: 0 },
  pageTitle: { fontSize: 22, fontWeight: 700, margin: 0 },
  sectionTitle: { fontSize: 16, fontWeight: 700, margin: 0 },
  body: { fontSize: 16, fontWeight: 400, display: 'block' },
  bodySmall: { fontSize: 14, fontWeight: 400, display: 'block' },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    display: 'block',
    color: token.colorTextSecondary,
  },
});
