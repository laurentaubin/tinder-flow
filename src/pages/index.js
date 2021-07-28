import { useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { Choice } from "../components/Choice";
import { EndCard } from "../components/EndCard";

const Index = () => {
  const reachEnd = (text) => {
    setEndCard(text);
    setIsEndReached(true);
  };

  const [showedCardIndex, setShowedCardIndex] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);
  const [endCard, setEndCard] = useState();
  const [choices, setChoices] = useState([
    {
      question: "Veux-tu que notre date soit one on one ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => setShowedCardIndex(1),
      choseSecond: () => setShowedCardIndex(16)
    },
    {
      question: "Es-tu une fille sportive ?",
      firstChoice: "Oui j'aime le sport",
      secondChoice: "Nope",
      choseFirst: () => setShowedCardIndex(2),
      choseSecond: () => setShowedCardIndex(6)
    },
    {
      question: "Est-ce que tu as un bon cardio ?",
      firstChoice: "Yes sir",
      secondChoice: "Non pentoute",
      choseFirst: () => setShowedCardIndex(6),
      choseSecond: () => setShowedCardIndex(4)
    },
    {
      question: "As-tu peur des hauteurs ?",
      firstChoice: "Oui",
      secondChoice: "Non je suis tough",
      choseFirst: () => setShowedCardIndex(5),
      choseSecond: () => reachEnd("Escalade ! (emoji)")
    },
    {
      question: "Aimes-tu Tiger Woods ?",
      firstChoice: "Oui",
      secondChoice: "Non je sais pas c'est qui",
      choseFirst: () => reachEnd("Mini putt (emoji)"),
      choseSecond: () => reachEnd("Marche dans le vieux Québec ou autre")
    },
    {
      question: "T'as tu un char ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => reachEnd("On va hike"),
      choseSecond: () => reachEnd("Une game de tennis")
    },
    {
      question: "Veux-tu que notre date soit à l'intérieur ou dehors ?",
      firstChoice: "À l'intérieur",
      secondChoice: "Dehors",
      choseFirst: () => setShowedCardIndex(7),
      choseSecond: () => setShowedCardIndex(13)
    },
    {
      question: "Aimes tu manger ?",
      firstChoice: "Oui",
      secondChoice: "Non c'est cringe",
      choseFirst: () => setShowedCardIndex(8),
      choseSecond: () => setShowedCardIndex(11)
    },
    {
      question: "Aimes-tu ça cuisiner ?",
      firstChoice: "Oui call me Ricardo",
      secondChoice: "Non je suis poche",
      choseFirst: () => setShowedCardIndex(9),
      choseSecond: () => setShowedCardIndex(10)
    },
    {
      question: "Veux-tu qu'on se voit le jour ou le soir ?",
      firstChoice: "Le jour",
      secondChoice: "Le soir",
      choseFirst: () => reachEnd("On se fait un brunch maison"),
      choseSecond: () => reachEnd("On se cuisine à souper")
    },
    {
      question: "Veux-tu qu'on se voit le jour ou le soir ?",
      firstChoice: "Le jour",
      secondChoice: "Le soir",
      choseFirst: () => reachEnd("On va bruncher"),
      choseSecond: () => reachEnd("On va souper au resto")
    },
    {
      question: "Aimes-tu l'art ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => reachEnd("On écoute un épisode de l'émission de Bob Ross pis on essaie de refaire la peinture"),
      choseSecond: () => setShowedCardIndex(12)
    },
    {
      question: "Aimes tu les jeux de société ?",
      firstChoice: "Oui j'adore",
      secondChoice: "Nah pas pour moi",
      choseFirst: () => reachEnd("Soirée board games !"),
      choseSecond: () => reachEnd("On chill à l'appart (netflix ou autres)")
    },
    {
      question: "As-tu un char ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => reachEnd("On va cueillir des fraises sur l'ile d'Orléans"),
      choseSecond: () => setShowedCardIndex(14)
    },
    {
      question: "T'as tu faim live ?",
      firstChoice: "Oui as fuck",
      secondChoice: "Non",
      choseFirst: () => reachEnd("On se fait un picnic sur les plaines"),
      choseSecond: () => setShowedCardIndex(15)
    },
    {
      question: "T'as tu soif ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => reachEnd("On va prendre un verre sur une terrasse"),
      choseSecond: () => reachEnd("On va voir le sunset sur le toit de mon bloc")
    },
    {
      question: "Aimes tu le sport ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => reachEnd("On va jouer au spikeball avec des amis"),
      choseSecond: () => setShowedCardIndex(17)
    },
    {
      question: "Aimes-tu l'alcool ?",
      firstChoice: "Oui",
      secondChoice: "Non",
      choseFirst: () => setShowedCardIndex(18),
      choseSecond: () => reachEnd("On va chiller à la plage")
    },
    {
      question: "As-tu des ami(e)s ?",
      firstChoice: "Oui j'en ai plein",
      secondChoice: "Non je suis rejet",
      choseFirst: () => reachEnd("On va à la plage en gang avec de l'alcool"),
      choseSecond: () => reachEnd("On fait un gros turn up avec nos amis")
    }
  ]);

  return (
    <Center bgGradient="linear(to-t, #ee2a7b, #ff7db8)" paddingBottom="200px">
      <Box marginTop="20%" marginBottom="25%" height="100%" width="100%">
        {!isEndReached && <Choice choice={choices[showedCardIndex]}></Choice>}
        {isEndReached && <EndCard cardText={endCard} />}
      </Box>
    </Center>
  );
};

export default Index;
