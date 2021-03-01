// import styles from "../styles/components/ExperienceBar.module.css";
import { ExpHeader, CurrentExperience } from "./styles";

export function ExperienceBar() {
  return (
    <ExpHeader>
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />

        <CurrentExperience style={{ left: "50%" }}>300xp</CurrentExperience>
      </div>
      <span>600 xp</span>
    </ExpHeader>
  );
}
