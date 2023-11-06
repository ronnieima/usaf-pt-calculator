"use client";
import React, { createContext, useContext, useState } from "react";

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

type ScoreContextProviderProps = {
  children: React.ReactNode;
};

export default function ScoreContextProvider({
  children,
}: ScoreContextProviderProps) {
  const [scores, setScores] = useState(initialScores);

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
