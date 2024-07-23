import { Image, Box, Button, Flex, Heading, Spacer, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex 
      minHeight='100vh' 
      width='100vw' 
      overflow='hidden' 
      p={['1rem 1.2rem', '1.5rem 3rem', '2.5rem 5rem']} 
      gap='10' 
      backgroundImage="url('/bg/best-yield-bg.png')" 
      backgroundSize='cover' 
      direction='column'>

        <Flex alignItems='center' gap='2' mb='2'>
          <Box p='2'>
            <Image
              src="/logos/idle-institutional.svg"
              alt="Idle Institutional"
              width={250}
              height={50}
            />
          </Box>
          <Spacer />

          <Button as='a' href='https://discord.com/invite/mpySAJp' target='_blank' size='lg'>
            Contact Us
          </Button>
        </Flex>

        <Flex flex="1" justifyContent='start' alignItems='center'>
          <Stack spacing={6} alignItems='start'>
            <Heading as='h1' size='4xl'>
              Institutional credit, <br /> onchain.
            </Heading>
            <Text fontSize='x-large'>
              Modernizing credit markets to bring speed, programmability,<br /> and compliance advantages of blockchain tokenization.
            </Text>
            <Button size='xl'>
              Early access
            </Button>
          </Stack>
        </Flex>

        <Box>
          <Text fontSize='small'>
            Trusted by
          </Text>
          <Wrap spacing={10} align='center'>
            <WrapItem>
              <Image
                src="/logos/rockaway.svg"
                alt="Rockaway"
                height='50px'
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/fasanara.svg"
                alt="Fasanara"
                height='50px'
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/maven.svg"
                alt="Maven"
                height='100px'
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/bastion.svg"
                alt="Bastion"
                height='100px'
              />
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
  );
}
