import { Avatar, Box, Stack, VStack,Text,Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react';

const AvatarPic="https://avatars.githubusercontent.com/u/117843305";
const GithubLink="https://github.com/Kuldeep9870";

const Footer = () => {
  return (
    <Box
        bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16","8"]}
    >
        <Stack
         direction={["column","row"]}
         h={"full"}
         alignItems={"center"}
         >
        <VStack w={"full"} alignItems={["center","flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
                We are best trading app in India, we provide our guidance at very affordable price
            </Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
                Made By KULDEEP
            </Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
            <Link href={GithubLink} isExternal>
               GitHub Profile <ExternalLinkIcon mx='2px' />
            </Link>
            </Text>
            
        </VStack>
        <VStack>
            <Avatar boxSize={"28"} mt={["4","0"]} size={"2xs"} src={AvatarPic}></Avatar>
            <Text>kuldeep9870</Text>
        </VStack>
        

        </Stack>
    </Box>
  )
}

export default Footer;