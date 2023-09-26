import { ButtonStyle } from "./style"

export const Button = ({
  label,
  type,
  onClick,
  onChange,
  color,
}) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : undefined}
      onChange={onChange ? onChange : undefined}
      color={color}
    >
      {label}
    </ButtonStyle>
  )
}