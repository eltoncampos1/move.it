// import styles from "../styles/components/ExperienceBar.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../../contextx/ChallengesContext";
import { ExpHeader, CurrentExperience } from "./styles";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <ExpHeader>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExpHeader>
  );
}
