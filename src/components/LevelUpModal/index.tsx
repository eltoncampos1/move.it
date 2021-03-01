import { Container, OverLay, CloseModalBUtton } from "./styles";

export function LevelUpModal() {
  return (
    <OverLay>
      <Container>
        <header>2</header>
        <strong>Congratulations</strong>
        <p>You have reached a new level.</p>

        <CloseModalBUtton>
          <img src="/icons/close.svg" alt="Close modal button" />
        </CloseModalBUtton>
      </Container>
      ;
    </OverLay>
  );
}
