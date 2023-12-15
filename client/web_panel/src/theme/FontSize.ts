// 字体大小(按内容层级)
export interface FontSize_Interface {
  super: string;
  ultra: string;
  default: string;
  title: string;
  desc: string;
  small: string;
  largeTitle: string;
}
type FontSizeDesc_Type = { [K in keyof FontSize_Interface]: string };
export const FontSize: FontSize_Interface = {
  super: '32px',
  ultra: '24px',
  largeTitle: '18px',
  default: '14px',
  title: '16px',
  desc: '12px',
  small: '10px',
};
export const FontSizeDesc: FontSizeDesc_Type = {
  super: '超级大标题',
  ultra: '特大标题',
  largeTitle: '大标题',
  default: '默认正文',
  title: '标题',
  desc: '描述',
  small: '小文字',
};
