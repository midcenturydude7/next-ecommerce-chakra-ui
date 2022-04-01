/* eslint-disable react/react-in-jsx-scope */
import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "../src/sections/details";
import Cart from "../src/sections/cart";

function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack 
          w="full" 
          h="full" 
          p={10} 
          spacing={10} 
          alignItems="flex-start"
        >
          <Details />
        </VStack>
        <VStack 
          w="full" 
          h="full" 
          p={10} 
          spacing={10} 
          alignItems="flex-start"
        >
          <Cart />
        </VStack>
      </Flex>
    </Container>
  );
}

export default Home;
