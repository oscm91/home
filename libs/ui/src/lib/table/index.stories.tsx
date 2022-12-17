import React from 'react';
import { Table, TableProps, Head, Row } from './index';
import { CalculatorImage } from '../../index';

export default {
  component: Table,
  title: 'Table',
};

export const table = () => {
  const props: TableProps = {
    title: 'Total de ventas de septiembre',
  };

  return (
    <Table {...props}>
      <Head>
        <div>Transacción</div>
        <div>Fecha y hora</div>
        <div>Método de pago</div>
        <div>ID transacción</div>
        <div>Bold Monto</div>
      </Head>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Row index={i}>
          <div>
            <span className="flex">
              <CalculatorImage width="15px" /> Cobro exitoso
            </span>
          </div>
          <div>
            <p className="whitespace-nowrap text-grisclaro">
              04/06/2020 - 17:14:24
            </p>
          </div>
          <div>
            <p className="whitespace-nowrap text-grisclaro">
              **** **** **** 7711
            </p>
          </div>
          <div>
            <p className="whitespace-nowrap text-grisclaro">GZEN23784UBV2</p>
          </div>
          <div>
            <span className="text-azul">$25.000</span>
            <span className="text-grisclaro">Deducción Bold</span>
            <span className="text-rojo">-$1.5000</span>
          </div>
        </Row>
      ))}
    </Table>
  );
};
