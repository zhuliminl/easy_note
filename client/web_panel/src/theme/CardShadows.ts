// 阴影
export interface CardShadows_Interface {
  shadow1: string;
  shadow2: string;
  shadow3: string;
  shadow4: string;
}
type CardShadowsDesc_Type = { [K in keyof CardShadows_Interface]: string };
export const CardShadows: CardShadows_Interface = {
  shadow1:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  shadow2:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  shadow3:
    '0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
  shadow4:
    '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)',
};
export const CardShadowsDesc: CardShadowsDesc_Type = {
  shadow1: '级别1',
  shadow2: '级别2',
  shadow3: '级别3',
  shadow4: '级别4',
};
