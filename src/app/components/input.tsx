import { Input, InputProps } from '@chakra-ui/react'
import { LegacyRef, Ref } from 'react'

interface CustomInputParams extends InputProps {
  inputRef?: LegacyRef<HTMLInputElement>
}

export default function CustomInput({
  value,
  onInput,
  onFocus,
  onChange,
  onKeyDown,
  isDisabled,
  inputRef,
}: CustomInputParams) {
  return (
    <Input
      className="notSelection"
      ref={inputRef}
      isDisabled={isDisabled}
      value={value || ''}
      onInput={onInput}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      variant="dark"
      size="xl"
      textAlign="center"
      htmlSize={1}
      maxLength={1}
      width="45px"
    />
  )
}
