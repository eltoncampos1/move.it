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
  const hasActiveChallenge = true;

  return (
    <ChallengeBoxContainer>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Earn 400 xp</header>

          <ChallengeBoxMain>
            <img src="icons/body.svg" />
            <strong>New Challenge</strong>
            <p>Lift and stretch for your back</p>
          </ChallengeBoxMain>

          <ChallengeBoxFooter>
            <FailedButton type="button">Failed</FailedButton>
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
