import { GetServerSideProps } from "next";
import Head from "next/head";

import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from "../components/Countdown";
import { ChalengeBox } from "../components/ChalengeBox";

import { Container, LeftSection } from "../styles/pages/Home";
import { CountdownProvider } from "../contextx/CountdownContext";
import { ChallengesProvidder } from "../contextx/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvidder
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvidder>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
