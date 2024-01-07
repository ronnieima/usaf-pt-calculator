import { create } from "zustand";
import { ExerciseComponentValues } from "../content";

type FormState = {
  upperBody: {
    score: number;
    minimumPerformanceValue?: number;
    maximumPerformanceValue?: number;
  };
  core: {
    score: number;
    minimumPerformanceValue?: number;
    maximumPerformanceValue?: number;
  };
  cardio: {
    score: number;
    minimumPerformanceValue?: number;
    maximumPerformanceValue?: number;
  };

  setScore: (component: ExerciseComponentValues, score: number) => void;
  setMinimumValue: (
    component: ExerciseComponentValues,
    minimumPerformanceValue: number,
  ) => void;
  setMaximumValue: (
    component: ExerciseComponentValues,
    maximumPerformanceValue: number,
  ) => void;
};

export const useFormStore = create<FormState>()((set) => ({
  upperBody: {
    score: 0,
    minimumPerformanceValue: 0,
    maximumPerformanceValue: 0,
  },
  core: {
    score: 0,
    minimumPerformanceValue: 0,
    maximumPerformanceValue: 0,
  },
  cardio: {
    score: 0,
    minimumPerformanceValue: 0,
    maximumPerformanceValue: 0,
  },
  setScore: (component: "upperBody" | "core" | "cardio", score: number) =>
    set((state) => ({
      [component]: {
        ...state[component],
        score,
      },
    })),
  setMinimumValue: (
    component: "upperBody" | "core" | "cardio",
    minimumPerformanceValue: number,
  ) =>
    set((state) => ({
      [component]: {
        ...state[component],
        minimumPerformanceValue,
      },
    })),
  setMaximumValue: (
    component: "upperBody" | "core" | "cardio",
    maximumPerformanceValue: number,
  ) =>
    set((state) => ({
      [component]: {
        ...state[component],
        maximumPerformanceValue,
      },
    })),
}));
