import { Box, Center, Text } from "@chakra-ui/react";

export const EndCard = ({ cardText }) => {
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
        <Text fontSize="2xl" paddingTop="16px">
          {cardText}
        </Text>
      </Center>
      <Center>
        <Text fontSize="xl">Texte moi un screenshot au 581-624-0863</Text>
      </Center>
    </Box>
  );
};
