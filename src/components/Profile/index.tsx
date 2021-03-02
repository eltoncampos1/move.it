import { useContext } from "react";
import { ChallengesContext } from "../../contextx/ChallengesContext";
import { ProfileContainer } from "./styles";
export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <ProfileContainer>
      <img src="https://github.com/eltoncampos1.png" alt="Elton Campos" />
      <div>
        <strong>Elton Campos</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
