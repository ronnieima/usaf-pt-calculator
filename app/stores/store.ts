import { create } from "zustand";
import { FormType } from "../_components/ui/(form)/MainForm";
import {
  CardioExercises,
  CoreExercises,
  ExerciseComponentValues,
  UpperBodyExercises,
} from "../content";

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
    let totalScore = 100;
    // Takes into account exemptions
    if (get().formData.upperBodyExercise === "exempt") totalScore -= 20;
    if (get().formData.coreExercise === "exempt") totalScore -= 20;
    if (get().formData.cardioExercise === "exempt") totalScore -= 60;
    return (
      ((get().upperBody.score + get().core.score + get().cardio.score) /
        totalScore) *
      100
    );
  },
  minimumMetStatus: (upperBodyExercise, coreExercise, cardioExercise) => {
    return {
      upperBody:
        upperBodyExercise === "exempt"
          ? true
          : get().upperBody.score >= get().upperBody.minimumPerformanceValue,
      core:
        coreExercise === "exempt"
          ? true
          : get().core.score >= get().core.minimumPerformanceValue,
      cardio:
        cardioExercise === "exempt"
          ? true
          : get().cardio.score >= get().cardio.minimumPerformanceValue,
    };
  },

  // REDUCERS
  setFormData: (formData) => set((state) => ({ formData })),
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
  finalScore: (
    upperExercise: UpperBodyExercises,
    coreExercise: CoreExercises,
    cardioExercise: CardioExercises,
  ) => number;
  minimumMetStatus: (
    upperExercise: UpperBodyExercises,
    coreExercise: CoreExercises,
    cardioExercise: CardioExercises,
  ) => {
    upperBody: boolean;
    core: boolean;
    cardio: boolean;
  };

  setFormData: (formData: FormType) => void;
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
