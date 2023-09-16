export function upperBodyValidationRules(upperBodyExercise) {
  if (upperBodyExercise === 'pushups' || upperBodyExercise === 'handrelease') {
    return {
      required: 'Rep amount is required',
      min: { value: 0, message: 'Reps must be greater than 0' },
      max: { value: 125, message: 'Maximum amount exceeded' },
      pattern: {
        value: /^\d*$/,
        message: 'Must be a whole number',
      },
    };
  }
}

export function coreValidationRules(coreExercise) {
  if (coreExercise == 'plank') {
    return {
      required: 'Plank time is required',
      pattern: {
        value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
        message: 'Invalid time format. (mm:ss)',
      },
      min: {
        value: 0,
        message: 'Time must be greater than 0',
      },
    };
  } else if (coreExercise === 'situps' || coreExercise === 'crunches') {
    return {
      required: 'Rep amount is required',
      min: {
        value: 0,
        message: 'Reps must be greater than 0',
      },
      max: { value: 125, message: 'Maximum amount exceeded' },
      pattern: {
        value: /^\d*$/,
        message: 'Must be a whole number',
      },
    };
  }
}

export function cardioValidationRules(cardioExercise) {
  if (cardioExercise === 'mile' || cardioExercise === 'walk') {
    return {
      required: 'Time is required',
      pattern: {
        value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
        message: 'Invalid time format (mm:ss)',
      },
      min: {
        value: 0,
        message: 'Time must be greater than 0',
      },
    };
  } else if (cardioExercise === 'shuttles') {
    return {
      required: 'Shuttle amount is required',
      min: { value: 0, message: 'Reps must be greater than 0' },
      max: { value: 999, message: 'Maximum amount exceeded' },
      pattern: {
        value: /^\d*$/,
        message: 'Must be a whole number',
      },
    };
  }
}
