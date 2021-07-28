import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";

export const Choice = ({ choice }) => {
  console.log(choice);

  return (
    <Box
      border="1px"
      borderRadius="20"
      padding="4"
      marginX="16px"
      marginTop="50%"
      marginBottom="50%"
      minHeight="50%"
      bgGradient="linear(to-tr, #ef4136, #fbb040)"
    >
      <Center>
        <Stack>
          <Center>
            <Text fontSize="2xl" marginBottom="16px">
              {choice.question}
            </Text>
          </Center>
          <Stack>
            <Center>
              <Button paddingX="50px" size="lg" width="75%" onClick={choice.choseFirst}>
                {choice.firstChoice}
              </Button>
            </Center>
            <Center>
              <Button paddingX="50px" size="lg" width="75%" onClick={choice.choseSecond}>
                {choice.secondChoice}
              </Button>
            </Center>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};
