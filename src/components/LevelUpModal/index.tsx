import { useContext } from "react";
import { ChallengesContext } from "../../contextx/ChallengesContext";
import { Container, OverLay, CloseModalBUtton } from "./styles";

export function LevelUpModal() {
  const { level, closeModalLevelUP } = useContext(ChallengesContext);
  return (
    <OverLay>
      <Container>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>You have reached a new level.</p>

        <CloseModalBUtton onClick={closeModalLevelUP}>
          <img src="/icons/close.svg" alt="Close modal button" />
        </CloseModalBUtton>
      </Container>
      ;
    </OverLay>
  );
}
