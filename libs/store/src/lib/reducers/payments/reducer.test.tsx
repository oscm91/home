import reducer from './reducer';
import { PAYMENTS_TABLE_FILTER_BY_YEAR } from '../../actions/actionTypes';

describe('Reducer', () => {
  it('Filtrar por año 2011', () => {
    //Arrange
    const initialState = {
      data: [
        {
          id: 'fake-id-6b20f213-b24d-41b9-bc24-39709f5208b3',
          created_date: '2021-11-05T13:12:29.362Z',
          transaction_name: 'Para mi',
          transaction_id: 'f30e2ad1-eeb1-40cd-9210-dc833fe849b5',
          payment_status: 'started',
          payment_type: 'Pizza Vegetariana',
          payment_method: '**** **** **** 7711',
          payment_value: 31000,
          payment_due: 0
        }
      ],
      normalized: [
        {
          id: 'fake-id-6b20f213-b24d-41b9-bc24-39709f5208b3',
          created_date: '2021-11-05T13:12:29.362Z',
          transaction_name: 'Para mi',
          transaction_id: 'f30e2ad1-eeb1-40cd-9210-dc833fe849b5',
          payment_status: 'started',
          payment_type: 'Pizza Vegetariana',
          payment_method: '**** **** **** 7711',
          payment_value: 31000,
          payment_due: 0
        }
      ],
      filtered: [
        {
          id: 'fake-id-6b20f213-b24d-41b9-bc24-39709f5208b3',
          created_date: '2021-11-05T13:12:29.362Z',
          transaction_name: 'Para mi',
          transaction_id: 'f30e2ad1-eeb1-40cd-9210-dc833fe849b5',
          payment_status: 'started',
          payment_type: 'Pizza Vegetariana',
          payment_method: '**** **** **** 7711',
          payment_value: 31000,
          payment_due: 0
        }
      ],
    };

    //Act
    const result = reducer(initialState, {
      type: PAYMENTS_TABLE_FILTER_BY_YEAR,
      payload: {
        year: 2020
      }
    });

    //Assert
    expect(result).toEqual({
      data: [
        {
          id: 'fake-id-6b20f213-b24d-41b9-bc24-39709f5208b3',
          created_date: '2021-11-05T13:12:29.362Z',
          transaction_name: 'Para mi',
          transaction_id: 'f30e2ad1-eeb1-40cd-9210-dc833fe849b5',
          payment_status: 'started',
          payment_type: 'Pizza Vegetariana',
          payment_method: '**** **** **** 7711',
          payment_value: 31000,
          payment_due: 0
        }
      ],
      normalized: [
        {
          id: 'fake-id-6b20f213-b24d-41b9-bc24-39709f5208b3',
          created_date: '2021-11-05T13:12:29.362Z',
          transaction_name: 'Para mi',
          transaction_id: 'f30e2ad1-eeb1-40cd-9210-dc833fe849b5',
          payment_status: 'started',
          payment_type: 'Pizza Vegetariana',
          payment_method: '**** **** **** 7711',
          payment_value: 31000,
          payment_due: 0
        }
      ],
      filtered: [
      ],
    });
  });
});
