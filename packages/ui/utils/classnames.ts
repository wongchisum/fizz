import classNames from 'classnames';

// 通过props生成对应的css类名
export const genClassNames = (props: Record<string, any>, prefix?: string) => {
  const picked = Object.keys(props).reduce((total, current) => {
    const value = props[current];
    if (value) {
      const key = prefix ? `${prefix}-${current}-${props[current]}` : `${current}-${props[current]}`;
      total[key] = true;
      return total;
    } else {
      return total;
    }
  }, {});
  return classNames(picked);
};
