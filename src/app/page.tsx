'use client'

import { Image, Box, Button, Flex, Heading, Spacer, Stack, Text, Wrap, WrapItem, Link } from "@chakra-ui/react";
import Lottie from "lottie-react";
import bg from "../../public/json/bg.json";

export default function Home() {
  return (
    <Box position='relative' overflow='hidden'>
      <Flex 
      minHeight='100vh' 
      width='100vw' 
      overflow='hidden' 
      p={['1rem 1.2rem', '1.5rem 3rem', '2.5rem 5rem']} 
      gap='10' 
      direction='column'>
        <Flex alignItems='center' gap='2' mb='2'>
          <Box p='2'>
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

          <Button as='a' href='https://discord.com/invite/mpySAJp' target='_blank' size='lg'>
            Contact Us
          </Button>
        </Flex>

        <Flex flex="1" justifyContent='start' alignItems='center'>
          <Stack spacing={10} alignItems='start'>
            <Heading as='h1' m='0' size={['3xl', '4xl']} fontWeight='600'>
              Institutional credit, <br /> on-chain.
            </Heading>
            <Text fontSize={['large', 'x-large']} fontWeight='500'>
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
                height={['25px', '30px', '50px']}
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/fasanara.svg"
                alt="Fasanara"
                height={['25px', '30px', '50px']}
              />
            </WrapItem>
            <WrapItem>
              <Image
                src="/logos/maven.svg"
                alt="Maven"
                height={['50px', '60px', '100px']}
              />
            </WrapItem>
            {/* <WrapItem>
              <Image
                src="/logos/bastion.svg"
                alt="Bastion"
                height='100px'
              />
            </WrapItem> */}
          </Wrap>
        </Box>
      </Flex>

      <Box position='absolute' zIndex='-1' top='0' left='0' right='0' bottom='0'>
        <Lottie animationData={bg} loop={true} className="full-bg" />
      </Box>
    </Box>
  );
}
