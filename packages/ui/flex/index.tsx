import type { FlexProps } from '../typing/flex';
import './index.less';
import { genClassNames } from '../utils/classnames';
import cx from 'classnames';

const Flex = (props: FlexProps) => {
  const { children, ...restProps } = props;
  const flexStyleProps = {
    inline: false,
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    wrap: 'wrap',
    ...restProps,
  };

  const classnames = cx(flexStyleProps.inline ? 'flex-inline' : 'flex', genClassNames(flexStyleProps, 'flex'));
  return <div className={classnames}>{children}</div>;
};

export default Flex;
