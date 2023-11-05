import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

const ScoreContext = createContext(null);

export default function ScoreContextProvider({ children }: PropsWithChildren) {
  const [scores, setScores] = useState({
    minimumMetStatus: { upper: false, core: false, cardio: false },
    upperScore: 0,
    coreScore: 0,
    cardioScore: 0,
    totalScore: 0,
  });
  return (
    <ScoreContext.Provider value={{ scores, setScores }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScoreContext() {
  const context = useContext(ScoreContext);
  if (!context)
    throw new Error(
      "useScoreContext can only be used inside ScoreContextProvider",
    );
  return context;
}
