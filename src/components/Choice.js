import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";

export const Choice = ({ choice }) => {
  console.log(choice);
  return (
    <Box border="1px" borderRadius="20" padding="4" marginX="16px" marginTop="10%" marginBottom="30%" minHeight="400px" bgColor="white">
      <Center>
        <Stack>
          <Center>
            <Text fontSize="2xl" fontWeight="bold" marginBottom="16px" marginTop="24px" align="center">
              {choice.question}
            </Text>
          </Center>
          <Stack height="300px" paddingBottom="48px">
            <Center marginTop="auto" marginBottom="0px">
              <Button
                paddingX="50px"
                size="lg"
                width="95%"
                fontSize="xl"
                borderRadius="20px"
                bgGradient="linear(to-r, #f53803, #fba000)"
                onClick={choice.choseFirst}
              >
                {choice.firstChoice}
              </Button>
            </Center>
            <Center>
              <Button
                paddingX="50px"
                size="lg"
                width="95%"
                fontSize="xl"
                borderRadius="20px"
                bgGradient="linear(to-r, #f53803, #fba000)"
                onClick={choice.choseSecond}
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
