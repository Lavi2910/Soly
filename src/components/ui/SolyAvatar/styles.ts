import type { GlobalToken } from 'antd';
import type { CSSProperties } from 'react';

export type SolyAvatarVariants = 'small' | 'medium' | 'large';

export const getAvatarStyle = (): Record<
  SolyAvatarVariants,
  CSSProperties
> => ({
  small: {
    width: 32,
    height: 32,
    fontSize: 14,
  },
  medium: {
    width: 48,
    height: 48,
    fontSize: 18,
  },
  large: {
    width: 72,
    height: 72,
    fontSize: 28,
    borderRadius: 16,
  },
});

export const getNameAvatarStyle = (
  name: string,
  token: GlobalToken,
): CSSProperties => {
  const colors = [
    token.colorPrimary,
    token.colorSuccess,
    token.colorWarning,
    token.colorError,
    token.colorInfo,
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return { backgroundColor: colors[Math.abs(hash) % colors.length] };
};
