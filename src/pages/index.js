import { useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import { Choice } from "../components/Choice";
import { EndCard } from "../components/EndCard";

const choices = require("../data/summer-2021.json");

const Index = () => {
  const [showedCardIndex, setShowedCardIndex] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);
  const [endCard, setEndCard] = useState();

  const reachEnd = (text) => {
    setEndCard(text);
    setIsEndReached(true);
  };

  const chooseNext = (index) => {
    if (typeof index == "number") {
      setShowedCardIndex(index);
      return;
    }

    reachEnd(index);
  };

  return (
    <Center bgGradient="linear(to-t, #000000, #923cb5)" paddingBottom="200px">
      <Box marginTop="20%" marginBottom="25%" height="100%" width="100%">
        {!isEndReached && <Choice choice={choices[showedCardIndex]} chooseNext={chooseNext}></Choice>}
        {isEndReached && <EndCard cardText={endCard} />}
      </Box>
    </Center>
  );
};

export default Index;
