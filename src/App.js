import "./App.css";
import { Image, Text, Center, Flex, Container } from "@chakra-ui/react";
import mainImage from "./imgs/main.png"; // Tell webpack this JS file uses this image
import logo from "./imgs/logo.png"; // Tell webpack this JS file uses this image

function App() {
  return (
    <Flex
      flexDirection={"column"}
      backgroundColor={"#000000"}
      minW="100vw"
      minH={"100vh"}
      pb="60px"
      pt="60px"
    >
      <Flex flexDirection="column">
        <Center>
          <Image
            src={mainImage}
            alt="logo"
            w={["284px", "284px", "284px"]}
            h="115px"
            minW={["284px", "284px", "284px"]}
            minH="115px"
          />
        </Center>
        <Container textAlign={"center"}>
          <Text fontSize={"20px"} color={"#FCFCFC"} mt="36px">
            Explorations of stories and principles of &apos;Titans&apos;.
            <br />
            <br />
            General Principles are conversations and notes from my personal
            quest of curiosity in how people successfully deal with the reality
            they are dealt with in order to get what they want out of life.
            <br />
            <br />
            It&apos;s my own 2.0 version of &apos;Tools for Titans&apos; to
            better understand the principles that guide top performers in their
            own understanding of happiness, success and lessons of wisdom.
          </Text>
        </Container>
      </Flex>
      <Center mt="48px">
        <Image
          src={logo}
          alt="logo"
          w={["53px", "53px", "53px"]}
          h="78px"
          minW={["53px", "53px", "53px"]}
          minH="78px"
        />
      </Center>
      <Center justifyContent={"center"} mt="36px">
        <Text
          color={"#FCFCFC"}
          fontWeight={700}
          textDecor="underline"
          as="a"
          href="https://blog.generalprinciples.to"
          target={"_blank"}
          fontSize="24px"
        >
          Notes
        </Text>
        <Text
          color={"#FCFCFC"}
          fontWeight={700}
          textDecor="underline"
          ml="84px"
          as="a"
          href="https://blog.generalprinciples.to"
          target={"_blank"}
          fontSize="24px"
        >
          Podcast
        </Text>
      </Center>
    </Flex>
  );
}

export default App;
