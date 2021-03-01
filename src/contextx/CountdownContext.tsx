import { createContext, ReactNode } from "react";

interface CountDownContextData {}

interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountDownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  return (
    <CountdownContext.Provider value={{}}>{children}</CountdownContext.Provider>
  );
}
