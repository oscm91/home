import React from 'react';
import usePayments from './facade';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import reducer from '../payments/reducer';

jest.mock('../../worker/rootAsyncReducer', () => {
  return () => {
    return Promise.resolve((a, b) => {
      return {
        payments: reducer(a.payments, b),
      };
    });
  };
});

import { getStore } from '../../store';

describe('payments reducer', () => {
  it('should get payments', async () => {
    const store: Store<any, any> = getStore({
      payments: {
        data: [],
      },
    });
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result, waitForNextUpdate } = renderHook(() => usePayments(), {
      wrapper,
    });

    act(() => {
      result.current.getData('week');
    });

    await waitForNextUpdate();

    expect(
      result.current.getState().filtered.map((payments) => payments.id)
    ).toEqual([]);
  });
});
