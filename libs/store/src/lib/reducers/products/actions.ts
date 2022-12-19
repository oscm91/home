import {
  FORM_UPDATE_INFO,
  FORM_SET_STEP,
  FORM_UPDATE,
} from '../../actions/actionTypes';

export const nextStep = (values, stepNumber) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: FORM_UPDATE_INFO,
      payload: {
        stepNumber,
        values,
      },
    });

    dispatch({
      type: FORM_UPDATE,
      payload: tempState.products,
    });
  };
  action.worker = true;

  return action;
};

export const setStep = (step) => {
  const action = async (dispatch, getState) => {
    dispatch({
      type: FORM_SET_STEP,
      payload: step,
    });
  };
  return action;
};