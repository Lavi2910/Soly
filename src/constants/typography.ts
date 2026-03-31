export const typographyVariants = {
  largeText: {
    fontSize: 18,
    fontWeight: 500,
  },
  mediumText: {
    fontSize: 16,
    fontWeight: 400,
  },
  smallText: {
    fontSize: 14,
    fontWeight: 400,
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
  },
} as const;

export type TypographyVariant = keyof typeof typographyVariants;
