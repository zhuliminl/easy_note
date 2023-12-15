// 字体颜色(primary 最黑，递减)
export interface FontColors_Interface {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
}
type FontColorsDesc_Type = { [K in keyof FontColors_Interface]: string };
export const FontColors: FontColors_Interface = {
  primary: '#222',
  secondary: '#555',
  tertiary: '#888',
  quaternary: '#DDD',
};
export const FontColorsDesc: FontColorsDesc_Type = {
  primary: '主要',
  secondary: '二级',
  tertiary: '三级',
  quaternary: '四级',
};
export const FontColorsDark: FontColors_Interface = {
  primary: '#FFF',
  secondary: '#EEE',
  tertiary: '#999',
  quaternary: '#666',
};
