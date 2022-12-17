import {
  PAYMENTS_TABLE_FORMAT,
  PAYMENTS_TABLE_FILTER,
  PAYMENTS_TABLE_UPDATE, PAYMENTS_TABLE_FILTER_BY_YEAR
} from '../../actions/actionTypes';

const initialState = {
  data: [],
  normalized: [],
  filtered: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PAYMENTS_TABLE_FORMAT: {
      const normalized = Object.values(payload.payments).map(
        (payments: any) => {
          return {
            ...payments,
            date: payments.created_date,
            amount: `$${payments.payment_value}`,
            deductions: `-$${payments.payment_due}`,
          };
        }
      );

      return {
        ...state,
        data: payload.payments,
        normalized,
      };
    }
    case PAYMENTS_TABLE_FILTER: {
      if (!payload.filters.length || payload.filters.includes('all')) {
        return {
          ...state,
          filtered: payload.payments,
        };
      }

      return {
        ...state,
        filtered: payload.payments.filter((payments) =>
          payload.filters.includes(payments.payment_type)
        ),
      };
    }
    case PAYMENTS_TABLE_FILTER_BY_YEAR: {
      const { year } = payload;

      return {
        ...state,
        filtered: state.normalized.filter((item) => item.created_date.includes(year)),
      };
    }
    case PAYMENTS_TABLE_UPDATE: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};
