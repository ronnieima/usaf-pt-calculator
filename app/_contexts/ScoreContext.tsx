"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type ScoreState = {
  minimumMetStatus: { upper: boolean; core: boolean; cardio: boolean };
  upper: number;
  core: number;
  cardio: number;
  totalScore: number;
};

const initialScores: ScoreState = {
  minimumMetStatus: { upper: true, core: true, cardio: true },
  upper: 0,
  core: 0,
  cardio: 0,
  totalScore: 0,
};

const ScoreContext = createContext<{
  scores: ScoreState;
  setScores: React.Dispatch<React.SetStateAction<ScoreState>>;
}>({
  scores: initialScores,
  setScores: () => {},
});

export default function ScoreContextProvider({ children }: PropsWithChildren) {
  const [scores, setScores] = useState(initialScores);
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

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
