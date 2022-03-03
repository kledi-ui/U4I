import { IButton } from '../../helpers';
import Style from './style'
const Button = ({ text, ...rest }: IButton) => {
  return <Style {...rest}>{text}</Style>;
};

export default Button;
