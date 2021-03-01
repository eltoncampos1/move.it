import { useContext } from "react";
import { CountdownContext } from "../../contextx/CountdownContext";
import {
  Container,
  CountdownButton,
  CountdownButtonActive,
  CountdownButtonFinished,
} from "./styles";

export function Countdown() {
  const {
    seconds,
    minutes,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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

      {hasFinished ? (
        <CountdownButtonFinished disabled>
          finished cycle
        </CountdownButtonFinished>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive type="button" onClick={resetCountdown}>
              Abandon the cycle
            </CountdownButtonActive>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Start the cycle
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
