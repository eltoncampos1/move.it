import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Completed Challenges</span>
      <span>10</span>
    </div>
  );
}
