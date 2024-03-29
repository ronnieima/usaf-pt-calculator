import ScoreIcons from './ScoreIcons';
import ScoreText from './ScoreText';

function ScoreMessage() {
  return (
    <section className="space-y-16 sm:grid sm:grid-cols-2">
      <ScoreText />
      <ScoreIcons />
    </section>
  );
}

export default ScoreMessage;
