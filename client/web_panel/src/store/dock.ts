import { create, StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

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

const useDockStoreBase = create<DockState>((set) => ({
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

export const useDockStore = createSelectors(useDockStoreBase);
export const useInitDock = () => useDockStoreBase().initDock;
export const useToggleDockExpand = () => useDockStoreBase().toggleExpand;
export const useDockIsExpand = () => useDockStoreBase().isExpand;

export const useDockPosition = () => {
  const store = useDockStoreBase();
  return {
    toRight: store.toRight,
    toTop: store.toTop,
  };
};

export const useUpdateDockPosition = () => useDockStoreBase().updatePosition;
