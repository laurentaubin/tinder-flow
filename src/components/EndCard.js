import { useState } from "react"
import { Box, Center, Text } from "@chakra-ui/react";
import { Choice } from "./Choice";

export const EndCard = ({ cardText }) => {
  const [sender, setSender] = useState("");

  const setLaurent = () => {
    setSender("laurent");
  };
  const setToma = () => {
    setSender("toma");
  };
  return (!!sender ? (
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
        <Text fontSize="xl">Texte moi un screenshot au {sender === "laurent" ? "581-234-5309" : "581-624-0863"}</Text>
      </Center>
    </Box>

  ) :
    (<Choice choice={{ question: "Qui t'as envoyé le lien ?", firstChoice: "Laurent", secondChoice: "Toma", choseFirst: setLaurent, choseSecond: setToma }} />)
  );
}
