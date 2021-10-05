import { Box, Center } from "@chakra-ui/react";
import { EndCard } from "../components/EndCard";

const choices = require("../data/fall-2021.json");

const endCards = [];

choices.map((choice) => {
  if (typeof choice.choseFirst !== "number") {
    endCards.push(choice.choseFirst);
  }
  if (typeof choice.choseSecond !== "number") {
    endCards.push(choice.choseSecond);
  }
});

const Preview = () => {
  return (
    <Center bgGradient="linear(to-t, #000000, #923cb5)">
      <Box>
        {endCards.map((text) => (
          <EndCard cardText={text} desktop />
        ))}
      </Box>
    </Center>
  );
};

export default Preview;
