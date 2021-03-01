import { ProfileContainer } from "./styles";
export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/eltoncampos1.png" alt="Elton Campos" />
      <div>
        <strong>Elton Campos</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 1
        </p>
      </div>
    </ProfileContainer>
  );
}
