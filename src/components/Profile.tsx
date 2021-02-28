import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eltoncampos1.png" alt="Elton Campos" />
      <div>
        <strong>Elton Campos</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}
