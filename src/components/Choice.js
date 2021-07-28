import { Box, Button, Text } from "@chakra-ui/react";

export const Choice = ({ choice }) => {
  console.log(choice);

  return (
    <Box>
      <Text>{choice.question}</Text>
      <Button onClick={choice.choseFirst}>{choice.firstChoice}</Button>
      <Button onClick={choice.choseSecond}>{choice.secondChoice}</Button>
    </Box>
  );
};
