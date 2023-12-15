// 品牌颜色和背景色
const brandColor = 'rgb(40 120 255)';

const rgbWithOpaticy = (color: string, opcatiry: string): string =>
  `${color.split(')')[0]} / ${opcatiry}%)`;

export interface Colors_Interface {
  primary: string;
  primary25: string;
  primary50: string;
  primary75: string;
  secondary: string;
  bgPrimary: string;
  bgSecondary: string;
  divide: string;
  divideDeep: string;
  link: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  hover: string;
  selected: string;
  disabled: string;
  white: string;
}
type ColorsDesc_Type = { [K in keyof Colors_Interface]: string };
export const Colors: Colors_Interface = {
  primary: brandColor,
  primary25: rgbWithOpaticy(brandColor, '25'),
  primary50: rgbWithOpaticy(brandColor, '50'),
  primary75: rgbWithOpaticy(brandColor, '75'),
  secondary: rgbWithOpaticy(brandColor, '75'),
  bgPrimary: '#FFF',
  bgSecondary: '#F5F6F7',
  divide: '#EEE',
  divideDeep: '#DDD',
  link: brandColor,
  success: 'green',
  warning: 'D83B01',
  danger: '#A80000',
  info: '#797775',
  hover: '#EEE',
  selected: '#DDD',
  disabled: '#999',
  white: '#FFF',
};
export const ColorsDesc: ColorsDesc_Type = {
  primary: '品牌颜色',
  primary25: '品牌颜色',
  primary50: '品牌颜色',
  primary75: '品牌颜色',
  secondary: '次级颜色',
  bgPrimary: '主要背景色',
  bgSecondary: '次级背景色',
  divide: '分割线',
  divideDeep: '分割线深',
  link: '链接',
  success: '成功',
  warning: '警告',
  danger: '危险',
  info: '信息',
  hover: 'hover',
  selected: '选中',
  disabled: '禁用',
  white: '白色',
};
export const ColorsDark: Colors_Interface = {
  primary: brandColor,
  primary25: rgbWithOpaticy(brandColor, '25'),
  primary50: rgbWithOpaticy(brandColor, '50'),
  primary75: rgbWithOpaticy(brandColor, '75'),
  secondary: rgbWithOpaticy(brandColor, '75'),
  bgPrimary: '#333',
  bgSecondary: '#444',
  divide: '#666',
  divideDeep: '#666',
  link: '#3BD4A3',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: '#999',
  hover: '#666',
  selected: 'red',
  disabled: '#999',
  white: '#FFF',
};
