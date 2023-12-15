export interface Sizes_Interface {
  appBaseToTop: number;
  appBaseToRight: number;
  appBaseWidth: number;
  appBaseHeight: number;
  dockWidth: number;
  dockToTop: number;
  dockToRight: number;
}

type SizesDesc_Type = { [K in keyof Sizes_Interface]: string };
export const Sizes: Sizes_Interface = {
  appBaseToTop: 40,
  appBaseToRight: 40,
  appBaseWidth: 200,
  appBaseHeight: 400,
  dockWidth: 50,
  dockToTop: 100,
  dockToRight: 100,
};
export const SizesDesc: SizesDesc_Type = {
  appBaseToTop: '距顶部基础距离',
  appBaseToRight: '距左边基础距离',
  appBaseWidth: 'App 基础宽度',
  appBaseHeight: 'App 基础高度',
  dockWidth: '活动条尺寸（圆点）',
  dockToTop: '距顶部',
  dockToRight: '距右边',
};
