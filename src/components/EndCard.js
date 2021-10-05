import { Box, Center, Stack, Text } from "@chakra-ui/react";

export const EndCard = ({ cardText, desktop }) => {
  return (
    <Box
      border="1px"
      borderRadius="20"
      padding="4"
      marginX="16px"
      marginTop={desktop ? "0" : "10%"}
      marginBottom={desktop ? "0" : "30%"}
      minHeight={desktop ? "200px" : "250px"}
      bgColor="white"
    >
      <Center>
        <Text fontSize="2xl" fontWeight="semibold" paddingTop="16px" align="center">
          {cardText}
        </Text>
      </Center>
      <Stack marginTop="36px">
        <Text fontSize="lg" align="center">
          {"Pour redeem ta date, texte moi un screenshot du résultat ! "}
        </Text>
      </Stack>
    </Box>
  );
};
