import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from "../components/Countdown";
import { ChalengeBox } from "../components/ChalengeBox";

import { Container, LeftSection } from "../styles/pages/Home";
import Head from "next/head";
import { CountdownProvider } from "../contextx/CountdownContext";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <LeftSection>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChalengeBox />
          </div>
        </LeftSection>
      </CountdownProvider>
    </Container>
  );
}
