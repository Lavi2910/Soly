import { Drawer, type DrawerProps } from 'antd';

export const SolyDrawer = ({ placement = 'right', ...props }: DrawerProps) => {
  return <Drawer placement={placement} {...props} />;
};
