import { Button as MuiButton } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

// type Props = ButtonProps & {
//   className?: string;
// };

type Props = ButtonProps & {
  className?: syring;
  onClick: () => void;
};

const Button = (props: Props) => {
  const { className, onClick, ...rest } = props;
  return (
    <MuiButton className={className} onClick={onClick} {...rest}>ใในใ</MuiButton>
  )
}

export default Button;