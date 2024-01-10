import { create } from "zustand";
import { FormType } from "../_components/ui/(form)/MainForm";
import { fetchPoints } from "../_db/supabase";
import convertDurationToSeconds from "../_util/convertDurationToSeconds";
import { ExerciseComponentValues, Exercises } from "../content";

export const useFormStore = create<FormState>()((set, get) => ({
  // VARIABLES
  finalScore: 0,
  upperBody: {
    score: 0,
    minimumPerformanceValue: NaN,
    maximumPerformanceValue: NaN,
  },
  core: {
    score: 0,
    minimumPerformanceValue: NaN,
    maximumPerformanceValue: NaN,
  },
  cardio: {
    score: 0,
    minimumPerformanceValue: NaN,
    maximumPerformanceValue: NaN,
  },
  minimumMetStatus: {
    upperBody: undefined,
    core: undefined,
    cardio: undefined,
  },
  // REDUCERS
  setFinalScore: (finalScore) => set(() => ({ finalScore })),
  setMinimumMetStatus: (minimumMetStatus) => set(() => ({ minimumMetStatus })),
  setScore: (component, score) =>
    set((state) => ({
      [component]: {
        ...state[component],
        score,
      },
    })),
  setMinimumValue: (component, minimumPerformanceValue) =>
    set((state) => ({
      [component]: {
        ...state[component],
        minimumPerformanceValue,
      },
    })),
  setMaximumValue: (component, maximumPerformanceValue) =>
    set((state) => ({
      [component]: {
        ...state[component],
        maximumPerformanceValue,
      },
    })),
}));

type FormState = {
  finalScore: number;
  upperBody: {
    score: number;
    minimumPerformanceValue: number;
    maximumPerformanceValue: number;
  };
  core: {
    score: number;
    minimumPerformanceValue: number;
    maximumPerformanceValue: number;
  };
  cardio: {
    score: number;
    minimumPerformanceValue: number;
    maximumPerformanceValue: number;
  };
  minimumMetStatus: {
    upperBody?: boolean;
    core?: boolean;
    cardio?: boolean;
  };

  setFinalScore: (finalScore: number) => void;
  setMinimumMetStatus: (status: {}) => void;
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
