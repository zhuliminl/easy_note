import React, { useState } from 'react';
import {
  useDockPosition,
  useDockStore,
  useUpdateDockPosition,
} from '~/store/dock';
import { useTheme } from '~/store/theme';
import Draggable, { ControlPosition } from 'react-draggable';
import { useLocalStorage } from 'usehooks-ts';

type IProps = {
  children: React.ReactNode;
};

export default ({ children }: IProps) => {
  const [localDockPosition, setLocalDockPosition] = useLocalStorage(
    'default_dock_position',
    { x: 0, y: 0 },
  );
  console.log('sual fuck', localDockPosition);

  const [dockPosition, setDockPosition] = useState<ControlPosition>({
    x: localDockPosition.x,
    y: localDockPosition.y,
  });

  const Theme = useTheme();
  const setIsHover = useDockStore.use.setIsHover();
  const isHover = useDockStore.use.isHover();
  const dockId = 'easy_note_dock';

  return (
    <Draggable
      handle={`#${dockId}`}
      position={dockPosition}
      onStart={(e) => {}}
      onDrag={(e, ui) => {
        setDockPosition({ x: ui.x, y: ui.y });
      }}
      onStop={(e, ui) => {
        console.log('saul ui', ui);
        setLocalDockPosition({ x: ui.x, y: ui.y });
      }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
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
          }}>
          {JSON.stringify(dockPosition)}
        </div>
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
