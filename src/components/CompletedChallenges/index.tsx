import { useContext } from "react";
import { ChallengesContext } from "../../contextx/ChallengesContext";
import { Container } from "./styles";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Container>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
