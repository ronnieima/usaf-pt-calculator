import { fetchExerciseScores } from '../../api/supabase';
import { useScoreContext } from '../../contexts/ScoreContext';

export function useScore() {
  const {
    setUpperBodyScore,
    setCoreScore,
    setCardioScore,
    setTotalScore,
    setIsMinimumNotMet,
  } = useScoreContext();

  async function fetchAndSetScores(data) {
    setIsMinimumNotMet(false);
    const { upper, core, cardio } = await fetchExerciseScores(data);
    if (upper === 0 || core === 0 || cardio === 0) {
      setIsMinimumNotMet(true);
    }
    setUpperBodyScore(upper);
    setCoreScore(core);
    setCardioScore(cardio);
    setTotalScore(upper + core + cardio);
  }

  return { fetchAndSetScores };
}
