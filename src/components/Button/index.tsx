import { Button } from "@material-ui/core";
import { IButtonProps } from "../../types/Interfaces";

export const ButtonComponent = ({
  children,
  variant,
  color,
  handleClick,
}: IButtonProps) => {
  return (
    <Button variant={variant} color={color} onClick={handleClick}>
      {children}
    </Button>
  );
};
