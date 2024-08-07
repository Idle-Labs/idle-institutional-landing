import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import {
  ChangeEvent,
  FocusEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import CustomInput from './input'
import { encrypt } from '../libs/crypto'
import { CODE_LENGTH } from '../libs/access'

interface CustomModalParams {
  isOpen: boolean
  onClose: () => void
}

export default function CustomModal({ isOpen, onClose }: CustomModalParams) {
  const [code, setCode] = useState(new Map())
  const inputRefs: { [index: number]: RefObject<HTMLInputElement> } = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
    2: useRef<HTMLInputElement>(null),
    3: useRef<HTMLInputElement>(null),
    4: useRef<HTMLInputElement>(null),
    5: useRef<HTMLInputElement>(null),
  }

  const onCode = (event: ChangeEvent<HTMLInputElement>) =>
    (event.target.value = ('' + event.target.value).toUpperCase())
  const onFocus = (event: FocusEvent<HTMLInputElement, Element>) =>
    event.target.select()
  const updateCode = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newCode = new Map(code)
    const value = event.target.value

    if (value) {
      newCode.set(index, value)
      index < CODE_LENGTH - 1 && inputRefs[index + 1].current?.focus()
    } else {
      newCode.delete(index)
      index > 0 && inputRefs[index - 1].current?.focus()
    }

    setCode(newCode)
  }
  const resetCode = () => setCode(new Map())
  const resetFocus = () => inputRefs[0].current?.focus()
  const reset = () => {
    resetCode()
    resetFocus()
  }
  const isCodeValid = () =>
    Array.from(code.values()).join('').length === CODE_LENGTH
  const submitCode = () => {
    if (!isCodeValid()) {
      return
    }

    const keyCode = Array.from(code.values()).join('')
    const crypted = encrypt(keyCode, process.env.NEXT_PUBLIC_SECRET_KEY || '')
    console.log('encrypt', crypted)
  }

  // Lifecycle
  useEffect(() => {
    isOpen && setTimeout(() => reset(), 100)
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      variant="dark"
      size="sm"
      onClose={onClose}
      onCloseComplete={reset}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Heading
            as="h3"
            fontWeight="normal"
            size="lg"
            mb="1"
            textAlign="center"
          >
            Early Access
          </Heading>
          <Text fontSize="lg" textAlign="center" mb="3" color="grey">
            Enter your invite code to gain early access
          </Text>
          <HStack spacing="10px" justifyContent="center">
            {[...Array(CODE_LENGTH)].map((_, index) => (
              <CustomInput
                key={index}
                inputRef={inputRefs[index]}
                value={code.get(index)}
                isDisabled={false}
                onInput={onCode}
                onFocus={onFocus}
                onChange={(e) => updateCode(e, index)}
                onKeyDown={(e) => e.key === 'Enter' && submitCode()}
              ></CustomInput>
            ))}
          </HStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button isDisabled={!isCodeValid()} onClick={submitCode}>
            Enter code
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
