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

fdescribe('products reducer', () => {
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
      stepNumber: 0, values: {}
    });

    act(() => {
      result.current.nextStep({ name: 'Oscar Mora' });
    });

    await waitForNextUpdate();

    expect(result.current.getState().wizard).toEqual({
      stepNumber: 0, values: { name: 'Oscar Mora' }
    });

    /*** */
    act(() => {
      result.current.setName('Nueva pizza de carne');
    });

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [],
      mass: undefined,
      price: 0,
      resume: [],
      isCompleted: false,
    });

    act(() => {
      result.current.addMass('Base de harina');
    });

    await waitForNextUpdate();

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [],
      mass: {
        name: 'Base de harina',
        price: 10000,
      },
      price: 10000,
      resume: [
        {
          name: 'Base de harina',
          quantity: 1,
          type: 'mass',
          price: 10000,
        },
      ],
      isCompleted: false,
    });

    act(() => {
      result.current.addIngredient('Pollo');
    });

    await waitForNextUpdate();

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [
        {
          name: 'Pollo',
          price: 5000,
        },
      ],
      mass: {
        name: 'Base de harina',
        price: 10000,
      },
      price: 15000,
      resume: [
        {
          name: 'Base de harina',
          quantity: 1,
          type: 'mass',
          price: 10000,
        },
        {
          name: 'Pollo',
          quantity: 1,
          type: 'ingredient',
          price: 5000,
        },
      ],
      isCompleted: true,
    });

    act(() => {
      result.current.addIngredient('Pollo');
    });

    await waitForNextUpdate();

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [
        {
          name: 'Pollo',
          price: 5000,
        },
        {
          name: 'Pollo',
          price: 5000,
        },
      ],
      mass: {
        name: 'Base de harina',
        price: 10000,
      },
      price: 20000,
      resume: [
        {
          name: 'Base de harina',
          quantity: 1,
          type: 'mass',
          price: 10000,
        },
        {
          name: 'Pollo',
          quantity: 2,
          type: 'ingredient',
          price: 10000,
        },
      ],
      isCompleted: true,
    });

    act(() => {
      result.current.addIngredient('Tomate');
    });

    await waitForNextUpdate();

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [
        {
          name: 'Pollo',
          price: 5000,
        },
        {
          name: 'Pollo',
          price: 5000,
        },
        {
          name: 'Tomate',
          price: 3000,
        },
      ],
      mass: {
        name: 'Base de harina',
        price: 10000,
      },
      price: 23000,
      resume: [
        {
          name: 'Base de harina',
          quantity: 1,
          type: 'mass',
          price: 10000,
        },
        {
          name: 'Pollo',
          quantity: 2,
          type: 'ingredient',
          price: 10000,
        },
        {
          name: 'Tomate',
          quantity: 1,
          type: 'ingredient',
          price: 3000,
        },
      ],
      isCompleted: true,
    });

    act(() => {
      result.current.removeIngredient('Pollo');
    });

    await waitForNextUpdate();

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [
        {
          name: 'Pollo',
          price: 5000,
        },
        {
          name: 'Tomate',
          price: 3000,
        },
      ],
      mass: {
        name: 'Base de harina',
        price: 10000,
      },
      price: 18000,
      resume: [
        {
          name: 'Base de harina',
          quantity: 1,
          type: 'mass',
          price: 10000,
        },
        {
          name: 'Pollo',
          quantity: 1,
          type: 'ingredient',
          price: 5000,
        },
        {
          name: 'Tomate',
          quantity: 1,
          type: 'ingredient',
          price: 3000,
        },
      ],
      isCompleted: true,
    });

    act(() => {
      result.current.removeMass('Base de harina');
    });

    await waitForNextUpdate();

    expect(result.current.getState().product).toEqual({
      name: 'Nueva pizza de carne',
      ingredients: [
        {
          name: 'Pollo',
          price: 5000,
        },
        {
          name: 'Tomate',
          price: 3000,
        },
      ],
      mass: undefined,
      price: 8000,
      resume: [
        {
          name: 'Pollo',
          quantity: 1,
          type: 'ingredient',
          price: 5000,
        },
        {
          name: 'Tomate',
          quantity: 1,
          type: 'ingredient',
          price: 3000,
        },
      ],
      isCompleted: false,
    });

    const product = result.current.getState().product;

    act(() => {
      result.current.saveProduct();
    });

    expect(result.current.getState().list).toEqual({
      [product.name]: product,
    });
  });
});
