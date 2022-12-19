import React from 'react';
import useProducts from './facade';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Store } from 'redux';
import reducer, { initialState } from '../products/reducer';

jest.mock('../../worker/rootAsyncReducer', () => {
  return () => {
    return Promise.resolve((a, b) => {
      return {
        products: reducer(a.products, b),
      };
    });
  };
});

import { getStore } from '../../store';

describe('products reducer', () => {
  it('should set product', async () => {
    const store: Store<any, any> = getStore({
      products: initialState,
    });
    const wrapper = ({ children }) => (
      <MemoryRouter initialEntries={['/user']}>
        <Provider store={store}>
          <Routes>
            <Route path="/:step" element={children} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper,
    });

    act(() => {
      result.current.nextStep({});
    });

    await waitForNextUpdate();

    expect(result.current.getState().wizard).toEqual({
      stepNumber: 1, values: {}
    });

    act(() => {
      result.current.nextStep({ name: 'Oscar Mora' });
    });

    await waitForNextUpdate();

    expect(result.current.getState().wizard).toEqual({
      stepNumber: 2, values: { name: 'Oscar Mora' }
    });

    act(() => {
      result.current.setStep(0);
    });

    expect(result.current.getState().wizard).toEqual({
      stepNumber: 0, values: { name: 'Oscar Mora' }
    });
  });
});
