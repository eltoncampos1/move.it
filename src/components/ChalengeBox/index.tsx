import { useContext } from "react";
import { ChallengesContext } from "../../contextx/ChallengesContext";
import {
  ChallengeBoxContainer,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeBoxMain,
  ChallengeBoxFooter,
  FailedButton,
  CompletedButton,
} from "./styles";

export function ChalengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Earn {activeChallenge.amount} xp</header>

          <ChallengeBoxMain>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </ChallengeBoxMain>

          <ChallengeBoxFooter>
            <FailedButton onClick={resetChallenge} type="button">
              Failed
            </FailedButton>
            <CompletedButton type="button">Succeeded</CompletedButton>
          </ChallengeBoxFooter>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finish a cycle to receive a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges.
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}
