import type { ReactNode } from 'react';

// 主轴方向
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

// 溢出排列
type FlexWrap = 'wrap' | 'no-wrap';

// 主轴对齐方式
type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

// 交叉轴对齐方式
type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export interface FlexProps {
  /** 需要渲染的子元素 */
  children?: ReactNode;
  /** 是否使用inline-flex布局，默认不使用 */
  inline?: boolean;
  /** 主轴方向,指定flex-direction样式,默认为"row" */
  direction?: FlexDirection;
  /** 主轴溢出排列，指定flex-wrap样式，默认为"wrap" */
  wrap?: FlexWrap;
  /** 主轴对齐方向，指定justify-content样式，默认为"flex-start" */
  justify?: FlexJustify;
  /** 交叉轴对齐方式，指定align-items样式，默认为"align-items" */
  align?: FlexAlign;
}
