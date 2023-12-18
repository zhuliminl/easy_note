import React from 'react';
import {
  useDockPosition,
  useDockStore,
  useUpdateDockPosition,
} from '~/store/dock';
import { useTheme } from '~/store/theme';

export default () => {
  const Theme = useTheme();
  const updatePosition = useUpdateDockPosition();
  const dockPosition = useDockPosition();
  const setIsHover = useDockStore.use.setIsHover();
  const isHover = useDockStore.use.isHover();
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => {
        updatePosition({ right: 200, top: 90 });
      }}
      style={{
        position: 'fixed',
        width: Theme.Sizes.dockWidth,
        height: Theme.Sizes.dockWidth,
        backgroundColor: isHover
          ? Theme.Colors.secondary
          : Theme.Colors.primary,
        borderRadius: Theme.Sizes.dockWidth / 2,
        top: dockPosition.toTop,
        right: dockPosition.toRight,
      }}></div>
  );
};
