import { create } from "zustand";
import { FormType } from "../_components/ui/(form)/MainForm";
import { fetchPoints } from "../_db/supabase";
import convertDurationToSeconds from "../_util/convertDurationToSeconds";
import { ExerciseComponentValues, Exercises } from "../content";

export const useFormStore = create<FormState>()((set, get) => ({
  // VARIABLES
  formData: {
    gender: "",
    ageGroup: "",
    upperBodyExercise: "",
    upperBodyInput: "",
    coreExercise: "",
    coreInput: "",
    cardioExercise: "",
    cardioInput: "",
  },
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

  // DERIVED STATE
  finalScore: () => {
    return get().upperBody.score + get().core.score + get().cardio.score;
  },

  minimumMetStatus: () => {
    return {
      upperBody:
        get().formData.upperBodyExercise === "exempt" ||
        get().upperBody.score >= get().upperBody.minimumPerformanceValue,
      core:
        get().formData.coreExercise === "exempt" ||
        get().core.score >= get().core.minimumPerformanceValue,
      cardio:
        get().formData.cardioExercise === "exempt" ||
        get().cardio.score >= get().cardio.minimumPerformanceValue,
    };
  },

  // REDUCERS
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
  formData: FormType;
  finalScore: () => number;

  minimumMetStatus: () => {
    upperBody: boolean;
    core: boolean;
    cardio: boolean;
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
