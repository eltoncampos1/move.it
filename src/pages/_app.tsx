import { useState } from "react";
import { ChallengesProvidder } from "../contextx/ChallengesContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvidder>
      <Component {...pageProps} />;
    </ChallengesProvidder>
  );
}

export default MyApp;
