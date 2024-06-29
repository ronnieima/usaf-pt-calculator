import Link from 'next/link';
import { Exercise } from '@/src/config/content';

const ExerciseVideos = ({ exercise }: { exercise: Exercise }) => {
  const { options } = exercise;

  return (
    <section className="space-y-16">
      {options.map((option) => {
        if (option.value === 'exempt') return;
        return (
          <figure key={option.value}>
            <header className="mb-2 text-2xl font-bold">
              <h2>{option.label}</h2>
            </header>
            <iframe className='h-72 w-full'  src={`https://www.youtube.com/embed/${option.videoUrl}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <figcaption>
              {option.videoSource && (
                <Link
                  href={option.videoSource}
                  className="text-primary hover:text-primary/50 hover:underline"
                  target="_blank"
                >
                  Source
                </Link>
              )}
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default ExerciseVideos;
