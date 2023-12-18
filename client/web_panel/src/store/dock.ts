import { create } from 'zustand';

interface Position {
  right: number;
  top: number;
}

interface DockState {
  isExpand: boolean;
  isDraging: boolean;
  isHover: boolean;
  toRight: number;
  toTop: number;
  toggleExpand: () => void;
  initDock: () => void;
  updatePosition: (p: Position) => void;
  setIsDraging: (flag: boolean) => void;
  setIsHover: (flag: boolean) => void;
}

const useDockStore = create<DockState>((set) => ({
  isExpand: false,
  isDraging: false,
  isHover: false,
  toRight: 0,
  toTop: 0,
  initDock: () => {},
  updatePosition: (p) => {
    set((state) => {
      return {
        toRight: p.right,
        toTop: p.top,
      };
    });
  },
  toggleExpand: () => {
    set((state) => {
      return { isExpand: !state.isExpand };
    });
  },
  setIsDraging: (isDraging) => {
    set((state) => {
      return {
        isDraging,
      };
    });
  },
  setIsHover: (isHover) => {
    set((state) => {
      return {
        isHover,
      };
    });
  },
}));

export const useInitDock = () => useDockStore().initDock;
export const useToggleDockExpand = () => useDockStore().toggleExpand;
export const useDockIsExpand = () => useDockStore().isExpand;

export const useDockPosition = () => {
  const store = useDockStore();
  return {
    toRight: store.toRight,
    toTop: store.toTop,
  };
};

export const useUpdateDockPosition = () => useDockStore().updatePosition;
