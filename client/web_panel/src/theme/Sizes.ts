// 尺寸（包括语义尺寸）
export interface Sizes_Interface {
  headerHeight: number;
  sidebarWidth: number;
  pageContentWidth: number;
  modalBaseWidth: number;
  modalBaseHeight: number;
  modalSmallWidth: number;
  modalSmallHeight: number;
  toastHeight: number;
  toastWidth: number;
  appPadding: number;
  pagePadding: number;
  cardPadding: number;
  fontCellPaddingTop: number;
  fontCellPaddingLeft: number;
  contentPaddingTop1: number;
  contentPaddingBottom1: number;
  iconSmall: number;
  iconMiddle: number;
  iconLarge: number;
  viewInit: number;
  cardBaseWidth: number;
  cardBaseHeight: number;
  buttonHeight: number;
  buttonHeightLarge: number;
  inputHeight: number;
  inputHeightMiddle: number;
  inputWidth: number;
  inputWidthMiddle: number;
  loginCardHeight: number;
  selectHeight: number;
  selectWidth: number;
  buttonPadding: number;
  inputPadding: number;
  dropNavHeight: number;
  dropOptionHeight: number;
  logoWidth: number;
  logoHeight: number;
  size1: number;
  size2: number;
  size3: number;
  size4: number;
  size5: number;
}
type SizesDesc_Type = { [K in keyof Sizes_Interface]: string };
const baseGrid = 20;
export const Sizes: Sizes_Interface = {
  headerHeight: 60,
  sidebarWidth: 160,
  pageContentWidth: 1000,
  modalBaseWidth: 900,
  modalBaseHeight: 500,
  modalSmallWidth: 500,
  modalSmallHeight: 200,
  toastHeight: 60,
  toastWidth: 900,

  appPadding: 10,
  pagePadding: 20,
  cardPadding: 10,
  fontCellPaddingTop: 5,
  fontCellPaddingLeft: 10,
  contentPaddingTop1: 40,
  contentPaddingBottom1: 20,

  iconSmall: 16,
  iconMiddle: 24,
  iconLarge: 36,
  viewInit: 80,

  cardBaseWidth: 150,
  cardBaseHeight: 100,
  buttonHeight: 32,
  buttonHeightLarge: 40,
  inputHeight: 30,
  inputHeightMiddle: 40,
  inputWidth: 200,
  inputWidthMiddle: 400,
  loginCardHeight: 400,
  selectHeight: 36,
  selectWidth: 150,
  buttonPadding: 15,
  inputPadding: 10,
  dropNavHeight: 50,
  dropOptionHeight: 40,
  logoWidth: 60,
  logoHeight: 40,

  size1: baseGrid * 1,
  size2: baseGrid * 2,
  size3: baseGrid * 3,
  size4: baseGrid * 4,
  size5: baseGrid * 5,
};
export const SizesDesc: SizesDesc_Type = {
  headerHeight: '顶部栏高度',
  sidebarWidth: '侧边栏宽度',
  pageContentWidth: '页面容器宽度',
  modalBaseWidth: 'modal 基础宽度',
  modalBaseHeight: 'modal 基础高度',
  modalSmallWidth: 'modal small',
  modalSmallHeight: 'modal small',
  toastHeight: 'toastHeight',
  toastWidth: 'toastWidth',

  appPadding: 'APP 级别边距',
  pagePadding: 'Page 级别边距',
  cardPadding: 'Card 级别边距',
  fontCellPaddingLeft: '字体 Cell 左右边距',
  fontCellPaddingTop: '字体 Cell 上下边距',
  contentPaddingTop1: '内容居上边距级别1',
  contentPaddingBottom1: '内容居上边距级别1',

  iconSmall: '小图标',
  iconMiddle: '中等图标',
  iconLarge: '大图标',
  viewInit: 'view 初始化',

  cardBaseWidth: '卡片宽度',
  cardBaseHeight: '卡片高度',
  buttonHeight: 'button height',
  buttonHeightLarge: 'buttonHeightLarge',
  inputHeight: 'input height',
  inputHeightMiddle: 'inputHeightMiddle',
  inputWidth: 'inputWidth',
  inputWidthMiddle: 'inputWidthMiddle',
  loginCardHeight: 'loginCardHeight',
  selectHeight: 'select height',
  selectWidth: 'select width',
  buttonPadding: 'button padding',
  inputPadding: 'input padding',
  dropNavHeight: 'dropNavHeight',
  dropOptionHeight: 'dropOptionHeight',
  logoWidth: 'logoWidth',
  logoHeight: 'logoHeight',
  size1: 'size1',
  size2: 'size2',
  size3: 'size3',
  size4: 'size4',
  size5: 'size4',
};
