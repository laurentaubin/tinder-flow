import { Box, Center, Link, Stack, Text } from "@chakra-ui/react";

export const EndCard = ({ cardText }) => {
  return (
    <Box border="1px" borderRadius="20" padding="4" marginX="16px" marginTop="10%" marginBottom="30%" minHeight="250px" bgColor="white">
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
