import React from 'react';
import {
  useDockPosition,
  useDockStore,
  useUpdateDockPosition,
} from '~/store/dock';
import { useTheme } from '~/store/theme';
import Draggable from 'react-draggable';

type IProps = {
  children: React.ReactNode;
};

export default ({ children }: IProps) => {
  const Theme = useTheme();
  const updatePosition = useUpdateDockPosition();
  const dockPosition = useDockPosition();
  const setIsHover = useDockStore.use.setIsHover();
  const isHover = useDockStore.use.isHover();
  const dockId = 'easy_note_dock';
  return (
    <Draggable
      handle={`#${dockId}`}
      // 默认值需要存在本地
      defaultPosition={{ x: -25, y: 25 }}
      // position={{}}
      onStart={() => {}}
      onDrag={() => {}}
      onStop={() => {}}>
      <div
        style={{
          position: 'fixed',
          top: 30,
          right: 30,
          zIndex: 9999999,
        }}>
        {/* dock  */}
        <div
          id={dockId}
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          onClick={() => {
            // updatePosition({ right: 200, top: 90 });
          }}
          style={{
            width: Theme.Sizes.dockWidth,
            height: Theme.Sizes.dockWidth,
            backgroundColor: isHover
              ? Theme.Colors.secondary
              : Theme.Colors.primary,
            borderRadius: Theme.Sizes.dockWidth / 2,
          }}></div>
        {/* 程序主体 */}
        <div
          className="no-cursor"
          style={{
            width: Theme.Sizes.appBaseWidth,
            height: Theme.Sizes.appBaseHeight,
            backgroundColor: Theme.Colors.primary,
          }}>
          {children}
        </div>
      </div>
    </Draggable>
  );
};
