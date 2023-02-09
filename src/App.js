import "./App.css";
import {
  Box,
  Button,
  Image,
  Text,
  chakra,
  Center,
  Flex,
} from "@chakra-ui/react";
import logo from "./imgs/logo.png"; // Tell webpack this JS file uses this image

function App() {
  return (
    <Flex
      flexDirection={"column"}
      backgroundColor={"#F5F6FA"}
      minW="100vw"
      minH={"100vh"}
      border="8px solid #0F0F0F"
    >
      <Flex flexGrow={1} flexDirection="column">
        <Image
          src={logo}
          alt="logo"
          w={["280px", "280px", "360px"]}
          h="64px"
          minW={["280px", "280px", "360px"]}
          minH="64px"
          mt="28px"
          ml="42px"
        />
        <Text
          color={"#1753EF"}
          fontWeight={600}
          fontSize={["40px", "40px", "96px"]}
          mt="116px"
          ml="42px"
        >
          Crafting Magical Digital Products
        </Text>
        <Text fontWeight={600} fontSize="32px" mt="48px" ml="42px">
          If you're building something new and could use a hand,{" "}
          <chakra.span color={"blue"} textDecor="underline">
            {" "}
            let&apos;s chat.
          </chakra.span>
        </Text>
      </Flex>
      <Center p="20px">
        <Text fontWeight={300} textAlign="center">
          It was always the plan to put the world in your hand.
        </Text>
      </Center>
    </Flex>
  );
}

export default App;
