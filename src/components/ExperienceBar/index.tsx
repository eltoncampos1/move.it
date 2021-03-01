// import styles from "../styles/components/ExperienceBar.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../../contextx/ChallengesContext";
import { ExpHeader, CurrentExperience } from "./styles";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );
  return (
    <ExpHeader>
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />

        <CurrentExperience style={{ left: "50%" }}>
          {currentExperience}
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExpHeader>
  );
}
