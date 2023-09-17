import { fetchExerciseScores } from '../../api/supabase';
import { useScoreContext } from '../../contexts/ScoreContext';

export function useScores() {
  const { setScores } = useScoreContext();

  async function fetchAndSetScores(data) {
    const { upper, core, cardio } = await fetchExerciseScores(data);

    let isMinimumNotMet = { upper: false, core: false, cardio: false };
    if (upper === 0) isMinimumNotMet.upper = true;
    if (core === 0) isMinimumNotMet.core = true;
    if (cardio === 0) isMinimumNotMet.cardio = true;

    const total = upper + core + cardio;

    setScores({
      isMinimumNotMet,
      upperScore: upper,
      coreScore: core,
      cardioScore: cardio,
      totalScore: total,
    });
  }

  return { fetchAndSetScores };
}
