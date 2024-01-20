"use client";

import { CldVideoPlayer } from "next-cloudinary";

import Link from "next/link";
import { Exercise } from "@/app/content";

const ExerciseVideos = ({ exercise }: { exercise: Exercise }) => {
  const { options } = exercise;

  return (
    <section className="space-y-16">
      {options.map((option) => {
        if (option.value === "exempt") return;
        return (
          <figure key={option.value}>
            <header className="mb-2 text-2xl font-bold">
              <h2>{option.label}</h2>
            </header>

            {/* Component from cloudinary */}
            <CldVideoPlayer
              id={option.value}
              width=""
              height=""
              src={`exercises/${option.value}`}
              logo={false}
            />
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
