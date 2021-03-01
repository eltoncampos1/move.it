import { createContext, ReactNode, useState } from "react";

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvidder({ children }: ChallengesProviderProps) {
  const [level, setlevel] = useState(1);

  function levelUp() {
    setlevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp }}>
      {children}
    </ChallengesContext.Provider>
  );
}
