import {
  PAYMENTS_TABLE_FORMAT,
  PAYMENTS_TABLE_FILTER,
  PAYMENTS_TABLE_UPDATE,
} from '../../actions/actionTypes';

export const addpayments = (payment, filters) => {
  const action = async (dispatch, getState) => {
    const state = getState();
    const paymentsData = [].concat(state.payments.data, payment);

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: paymentsData,
        normalized: [],
        filtered: [],
      },
    });

    dispatch(paymentsTableFormat(paymentsData, filters));
  };
  return action;
};

export const getpayments = (search, filters) => {
  const action = async (dispatch, getState) => {
    const state = getState();
    const paymentsData = state.payments.data;

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: [],
        normalized: [],
        filtered: [],
      },
    });

    const response = await new Promise((resolve) => {
      setTimeout(() => {
        if (search === 'today') {
          resolve(paymentsData);
        }
        if (search === 'week') {
          resolve(paymentsData);
        }
        if (search === 'september') {
          resolve(paymentsData);
        }
      }, 100);
    });

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: response,
        normalized: [],
        filtered: [],
      },
    });

    const payments = getState().payments.data;

    dispatch(paymentsTableFormat(payments, filters));
  };
  return action;
};

export const paymentsTableFormat = (payments, filters) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        data: [],
        normalized: [],
        filtered: [],
      },
    });

    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PAYMENTS_TABLE_FORMAT,
      payload: { payments },
    });
    const newState = await asyncReducer(tempState, {
      type: PAYMENTS_TABLE_FILTER,
      payload: { payments: tempState.payments.normalized, filters },
    });

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: newState.payments,
    });
  };
  action.worker = true;

  return action;
};

export const paymentsTableFilter = (payments, filters) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: {
        ...payments,
        filtered: [],
      },
    });
    const asyncReducer = await getAsyncReducer();
    const result = await asyncReducer(getState(), {
      type: PAYMENTS_TABLE_FILTER,
      payload: { payments, filters },
    });

    dispatch({
      type: PAYMENTS_TABLE_UPDATE,
      payload: result.payments,
    });
  };
  action.worker = true;

  return action;
};
