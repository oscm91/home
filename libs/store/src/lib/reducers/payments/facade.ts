/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentsTableFilter, getpayments, addpayments } from './actions';

function UUID() {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

export default () => {
  const payments = useSelector((state) => ({
    ...state['payments'],
    list: state['products'].list,
  }));
  const dispatch = useDispatch();

  const [search, setSearch] = useState('today');
  const [filters, setFilters] = useState([]);
  const [total, setTotal] = useState([]);

  const [buyer, setBuyer] = useState('');
  const [product, setProduct] = useState('');

  return {
    getSearch: () => search,
    setSearch: (value) => setSearch(value),
    checkFilter: (nameFilter) => {
      return filters.includes(nameFilter);
    },
    setFilters: (nameFilter, value) => {
      if (value) {
        setFilters(Array.from(new Set([].concat(nameFilter, filters))));
      } else {
        setFilters(
          Array.from(new Set([].concat(nameFilter, filters))).filter(
            (filter) => filter !== nameFilter
          )
        );
      }
    },
    getData: (search) => {
      dispatch(getpayments(search, filters) as any);
    },
    filter: () => {
      dispatch(paymentsTableFilter(payments.normalized, filters) as any);
    },
    getState: () => payments,
    getTotal: () => total,
    setTotal: () => setTotal,
    buyer,
    product,
    setBuyer,
    setProduct,
    total: (payments.data || []).reduce(
      (total, payment) => total + (payment.payment_value || 0),
      0
    ),
    sellProduct: () => {
      if (!buyer || !product) {
        return;
      }

      dispatch(
        addpayments(
          {
            id: 'fake-id-' + UUID(),
            created_date: new Date().toISOString(),
            transaction_name: buyer,
            transaction_id: UUID(),
            payment_status: 'started',
            payment_type: product,
            payment_method: '**** **** **** 7711',
            payment_value: payments.list[product].price,
            payment_due: 0,
          },
          filters
        ) as any
      );

      setBuyer('');
      setProduct('');
    },
  };
};
