import { createContext, useContext, useState } from 'react';

const ScoreContext = createContext(null);

export default function ScoreContextProvider({ children }) {
  const [scores, setScores] = useState({
    isMinimumNotMet: { upper: false, cardio: false, cardio: false },
    upperScore: 0,
    coreScore: 0,
    cardioScore: 0,
    totalScore: 0,
  });

  return (
    <ScoreContext.Provider
      value={{
        scores,
        setScores,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScoreContext() {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error(
      'useScoreContext must be used inside the ScoreContextProvider',
    );
  }
  return context;
}
