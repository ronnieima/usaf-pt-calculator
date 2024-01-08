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
  getScore: async () => {
    const setScore = get().setScore;

    const components: ExerciseComponentValues[] = [
      "upperBody",
      "core",
      "cardio",
    ];
    const gender = get().formData.gender;
    const ageGroup = get().formData.ageGroup;

    for (const component of components) {
      const exercise = get().formData[`${component}Exercise`] as Exercises;
      const input = get().formData[`${component}Input`];
      let result = ["forearm_plank", "1.5_mile_run"].includes(exercise)
        ? convertDurationToSeconds(input)
        : Number(input);

      const minimumValue = get()[component].minimumPerformanceValue;
      const maximumValue = get()[component].maximumPerformanceValue;

      // Validation and calculation logic
      if (
        // case: fail
        isNaN(result) ||
        result < minimumValue ||
        (exercise === "1.5_mile_run" && result > maximumValue)
      ) {
        setScore(component, 0);
      } else if (result > maximumValue) {
        // case: exceeds max
        setScore(
          component,
          ["1.5_mile_run", "20_meter_hamr_shuttle"].includes(exercise)
            ? 60
            : 20,
        );
      } else {
        // case: scoredin between

        const finalScore = await fetchPoints(
          gender,
          ageGroup,
          exercise,
          result,
        );
        setScore(component, finalScore);
      }
    }
  },

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
  setFormData: (formData) => set(() => ({ formData })),
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
  getScore: () => void;
  finalScore: () => number;

  minimumMetStatus: () => {
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
