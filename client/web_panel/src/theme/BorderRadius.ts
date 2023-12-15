// 圆角
export interface BorderRadius_Interface {
  small: number;
  middle: number;
  large: number;
  ultra: number;
}
type BorderRadiusDesc_Type = { [K in keyof BorderRadius_Interface]: string };
export const BorderRadius: BorderRadius_Interface = {
  small: 4,
  middle: 8,
  large: 16,
  ultra: 32,
};
export const BorderRadiusDesc: BorderRadiusDesc_Type = {
  small: '小',
  middle: '中',
  large: '大',
  ultra: '特大',
};
