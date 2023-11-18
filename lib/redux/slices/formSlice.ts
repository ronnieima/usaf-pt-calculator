import { createSlice } from "@reduxjs/toolkit";

type ScoreType = {
  inputs: {
    gender: string;
    ageGroup: string;
    muscularStrengthExercise: string;
    muscularStrengthResult: string;
    coreEnduranceExercise: string;
    coreEnduranceResult: string;
    cardiorespiratoryFitnessExercise: string;
    cardiorespiratoryFitnessResult: string;
  };
  scores: {
    muscularStrengthScore: number;
    coreEnduranceScore: number;
    respiratoryFitnessScore: number;
  };
};

const initialState: ScoreType = {
  inputs: {
    gender: "",
    ageGroup: "",
    muscularStrengthExercise: "",
    muscularStrengthResult: "",
    coreEnduranceExercise: "",
    coreEnduranceResult: "",
    cardiorespiratoryFitnessExercise: "",
    cardiorespiratoryFitnessResult: "",
  },
  scores: {
    muscularStrengthScore: 0,
    coreEnduranceScore: 0,
    respiratoryFitnessScore: 0,
  },
};

const formSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.inputs = action.payload;
    },

    calculateScore: (state, action) => {
      state.scores = action.payload;
    },
  },
});

export const { setFormData, calculateScore } = formSlice.actions;

export default formSlice.reducer;
