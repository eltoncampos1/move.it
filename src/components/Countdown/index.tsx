import { useEffect, useState } from "react";
import { Container, CountdownButton, CountdownButtonActive } from "./styles";

let countDownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setisActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setisActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setisActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {isActive ? (
        <CountdownButtonActive type="button" onClick={resetCountdown}>
          Abandonar o ciclo
        </CountdownButtonActive>
      ) : (
        <CountdownButton type="button" onClick={startCountdown}>
          Iniciar um ciclo
        </CountdownButton>
      )}
    </div>
  );
}
