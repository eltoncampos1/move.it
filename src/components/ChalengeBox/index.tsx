import { ChallengeBoxContainer, ChallengeNotActive } from "./styles";

export function ChalengeBox() {
  return (
    <ChallengeBoxContainer>
      <ChallengeNotActive>
        <strong>Finish a cycle to receive a challenge</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Level up by completing challenges.
        </p>
      </ChallengeNotActive>
    </ChallengeBoxContainer>
  );
}
