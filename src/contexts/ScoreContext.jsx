import { createContext, useContext, useState } from 'react';

const ScoreContext = createContext(null);

export default function ScoreContextProvider({ children }) {
  const [isMinimumNotMet, setIsMinimumNotMet] = useState(null);
  const [upperScore, setUpperBodyScore] = useState(null);
  const [coreScore, setCoreScore] = useState(null);
  const [cardioScore, setCardioScore] = useState(null);
  const [totalScore, setTotalScore] = useState(null);

  return (
    <ScoreContext.Provider
      value={{
        isMinimumNotMet,
        setIsMinimumNotMet,
        upperScore,
        setUpperBodyScore,
        coreScore,
        setCoreScore,
        cardioScore,
        setCardioScore,
        totalScore,
        setTotalScore,
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
