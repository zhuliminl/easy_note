import React from 'react';
import { useDockPosition, useUpdateDockPosition } from '~/store/dock';
import { useTheme } from '~/store/theme';

export default () => {
  const Theme = useTheme();
  const updatePosition = useUpdateDockPosition();
  const dockPosition = useDockPosition();
  return (
    <div
      onClick={() => {
        updatePosition({ right: 200, top: 90 });
      }}
      style={{
        position: 'fixed',
        width: Theme.Sizes.dockWidth,
        height: Theme.Sizes.dockWidth,
        backgroundColor: Theme.Colors.primary,
        borderRadius: Theme.Sizes.dockWidth / 2,
        top: dockPosition.toTop,
        right: dockPosition.toRight,
      }}></div>
  );
};
