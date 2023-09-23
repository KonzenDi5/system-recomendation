import { InputStyle } from './style'

export const Input=({
  placeholder,
  label,
  onClick,
  type = 'text',
  onChange
}) => {
  return (
    <InputStyle type={type} placeholder={placeholder} onClick={onClick} onChange={onChange}>
      {label}
    </InputStyle>
  )
}