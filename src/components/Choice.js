import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";

export const Choice = ({ choice, chooseNext }) => {
  return (
    <Box border="1px" borderRadius="20" padding="4" marginX="16px" marginTop="10%" marginBottom="30%" height="450px" bgColor="white">
      <Center height="100%" width="100%">
        <Stack height="100%" width="100%">
          <Center>
            <Text fontSize="2xl" fontWeight="bold" marginTop="24px" align="center">
              {choice.question}
            </Text>
          </Center>
          <Stack height="100%" width="100%" paddingBottom="48px">
            <Center marginTop="auto" marginBottom="0px">
              <Button
                paddingX="50px"
                size="lg"
                width="100%"
                fontSize="xl"
                borderRadius="20px"
                bgGradient="linear(to-r, #f53803, #fba000)"
                onClick={() => chooseNext(choice.choseFirst)}
              >
                {choice.firstChoice}
              </Button>
            </Center>
            <Center>
              <Button
                paddingX="50px"
                size="lg"
                width="100%"
                fontSize="xl"
                borderRadius="20px"
                bgGradient="linear(to-r, #f53803, #fba000)"
                onClick={() => chooseNext(choice.choseSecond)}
                _focus={{ outline: "0", backgroundColor: "black" }}
              >
                {choice.secondChoice}
              </Button>
            </Center>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};
