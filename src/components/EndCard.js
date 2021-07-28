import { useState } from "react";
import { Box, Center, Link, Stack, Text } from "@chakra-ui/react";
import { Choice } from "./Choice";

export const EndCard = ({ cardText }) => {
  const [sender, setSender] = useState("");

  const setLaurent = () => {
    setSender("laurent");
  };
  const setToma = () => {
    setSender("toma");
  };
  return !!sender ? (
    <Box border="1px" borderRadius="20" padding="4" marginX="16px" marginTop="10%" marginBottom="30%" height="250px" bgColor="white">
      <Center>
        <Text fontSize="2xl" fontWeight="semibold" paddingTop="16px" align="center">
          {cardText}
        </Text>
      </Center>
      <Stack marginTop="36px">
        <Text fontSize="lg" align="center">
          Texte moi un screenshot au
        </Text>
        <Link align="center" marginTop="0 !important" href={`sms:+1${sender === "laurent" ? "5812345309" : "5816240863"}`}>
          <Text as="u" fontSize="lg" align="center">
            {sender === "laurent" ? "581-234-5309" : "581-624-0863"}
          </Text>
        </Link>
      </Stack>
    </Box>
  ) : (
    <Choice
      choice={{
        question: "Qui t'as envoyé le lien ?",
        firstChoice: "Laurent",
        secondChoice: "Toma",
        choseFirst: setLaurent,
        choseSecond: setToma
      }}
    />
  );
};
