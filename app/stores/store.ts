import { create } from "zustand";
import { ExerciseComponentValues } from "../content";

export const useFormStore = create<FormState>()((set, get) => ({
  // VARIABLES
  isCheckedShuttleAudio: false,
  finalScore: 0,
  minMaxValues: {
    upperBody: {
      minimumPerformanceValue: NaN,
      maximumPerformanceValue: NaN,
    },
    core: {
      minimumPerformanceValue: NaN,
      maximumPerformanceValue: NaN,
    },
    cardio: {
      minimumPerformanceValue: NaN,
      maximumPerformanceValue: NaN,
    },
  },
  minimumMetStatus: {
    upperBody: undefined,
    core: undefined,
    cardio: undefined,
  },
  scores: {
    upperBody: NaN,
    core: NaN,
    cardio: NaN,
  },

  // REDUCERS
  toggleIsCheckedShuttleAudio: () =>
    set((prev) => ({ isCheckedShuttleAudio: !prev.isCheckedShuttleAudio })),
  setFinalScore: (finalScore) => set(() => ({ finalScore })),
  setMinimumMetStatus: (minimumMetStatus) => set(() => ({ minimumMetStatus })),
  setComponentScores: (scores) => set(() => ({ scores })),
  setComponentScore: (component, score) =>
    set((state) => ({
      ...state,
      scores: { ...state.scores, [component]: score },
    })),
  setMinMaxValues: (minMaxValues) => set(() => ({ minMaxValues })),
  setComponentMinMaxValues: (component, minMaxValues) =>
    set((state) => ({
      ...state,
      minMaxValues: {
        ...state.minMaxValues,
        [component]: minMaxValues,
      },
    })),
}));

type FormState = {
  isCheckedShuttleAudio: boolean;
  finalScore: number;
  minMaxValues: MinMaxValues;
  minimumMetStatus: MinimumMetStatus;
  scores: ComponentScores;

  toggleIsCheckedShuttleAudio: () => void;
  setFinalScore: (finalScore: number) => void;
  setMinimumMetStatus: (status: MinimumMetStatus) => void;
  setComponentScores: (scores: ComponentScores) => void;
  setComponentScore: (
    component: ExerciseComponentValues,
    score: number,
  ) => void;
  setMinMaxValues: (minMaxValues: MinMaxValues) => void;
  setComponentMinMaxValues: (
    component: ExerciseComponentValues,
    minMaxValues: {
      minimumPerformanceValue: number;
      maximumPerformanceValue: number;
    },
  ) => void;
};

export type MinMaxValues = {
  upperBody: {
    minimumPerformanceValue: number;
    maximumPerformanceValue: number;
  };
  core: {
    minimumPerformanceValue: number;
    maximumPerformanceValue: number;
  };
  cardio: {
    minimumPerformanceValue: number;
    maximumPerformanceValue: number;
  };
};

export type ComponentScores = {
  upperBody: number;
  core: number;
  cardio: number;
};

export type MinimumMetStatus = {
  upperBody?: boolean;
  core?: boolean;
  cardio?: boolean;
};
