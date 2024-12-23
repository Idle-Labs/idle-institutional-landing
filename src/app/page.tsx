'use client'

import {
  Image,
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import bg from '../../public/json/bg.json'

import CustomModal from './components/modal'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box position="relative" overflow="hidden">
      <Flex
        minHeight="100vh"
        width="100vw"
        overflow="hidden"
        p={['1rem 1.2rem', '1.5rem 3rem', '2.5rem 5rem']}
        gap="10"
        direction="column"
      >
        <Flex alignItems="center" gap="2" mb="2">
          <Box p="2">
            <Link href="https://idle.finance/" target="_blank">
              <Image
                src="/logos/idle-institutional.svg"
                alt="Idle Institutional"
                width={250}
                height={50}
              />
            </Link>
          </Box>
          <Spacer />

          <Button
            as="a"
            href="https://tally.so/r/mYY210"
            target="_blank"
            size="lg"
          >
            Contact Us
          </Button>
        </Flex>

        <Flex flex="1" justifyContent="start" alignItems="center">
          <Stack spacing={10} alignItems="start">
            <Heading as="h1" m="0" size={['3xl', '4xl']} fontWeight="600">
              Institutional credit, <br /> on-chain.
            </Heading>
            <Text fontSize={['large', 'x-large']} fontWeight="500">
              Modernizing credit markets to bring speed, programmability,
              <br /> and compliance advantages of blockchain tokenization.
            </Text>
            <Button size="xl" onClick={onOpen}>
              Early access
            </Button>
          </Stack>
        </Flex>

        <Box>
          <Text fontSize="small">Trusted by</Text>
          <Wrap spacing={[5, 10]} align="center">
            <WrapItem>
              <Image
                src="/logos/rockaway.svg"
                alt="Rockaway"
                height={['20px', '30px', '30px', '50px']}
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/fasanara-digital.svg"
                alt="Fasanara"
                height={['20px', '30px', '30px', '50px']}
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/falconX.svg"
                alt="FalconX"
                height={['15px', '15px', '20px', '40px']}
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/maven.svg"
                alt="Maven"
                height={['60px', '90px', '100px', '130px']}
              />
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>

      <CustomModal isOpen={isOpen} onClose={onClose}></CustomModal>

      <Box
        position="absolute"
        zIndex="-1"
        top="0"
        left="0"
        right="0"
        bottom="0"
      >
        <Lottie animationData={bg} loop={true} className="full-bg" />
      </Box>
    </Box>
  )
}
