import React from 'react';
import {
  Card,
  Tabs,
  Table,
  Head,
  Row,
  CalculatorImage,
  Filter,
  Menu,
  MenuItem,
  HomeSolid,
  ToolsSolid,
  SignOutAltSolid
} from '../../index';

export default {
  component: () => {},
  title: 'Pages/Dashboard',
};

export const dashboard = () => {
  const props = {
    onClick: () => {},
  };

  return (
    <div className="flex overflow-y-auto relative flex-row h-screen bg-backcontent">
      <div className="sticky top-0 flex-none">
        <div className="inline-flex overflow-hidden flex-col justify-between px-2 h-screen bg-white rounded-l-xl">
          <Menu>
            <MenuItem
              onClick={() => {
                console.log('home');
              }}
            >
              <HomeSolid />
            </MenuItem>
            <MenuItem
              data-active={true}
              onClick={() => {
                console.log('resume');
              }}
            >
              <ToolsSolid />
            </MenuItem>
          </Menu>
          <Menu {...props}>
            <MenuItem
              onClick={() => {
                console.log('logout');
              }}
            >
              <SignOutAltSolid />
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div
        className="flex flex-grow bg-backcontent"
        style={{ height: 'max-content' }}
      >
        <main className="flex-col flex-grow px-4 pt-10">
          <div className="flex flex-row justify-between space-x-6">
            <div className="w-5/12">
              <Card title="Total de ventas de septiembre">
                <h4 className="bg-clip-text text-transparent bg-primary text-4xl font-bold">
                  $1'560.000
                </h4>
                <p className="text-primary text-xs">Septiembre 21</p>
              </Card>
            </div>
            <div className="w-7/12">
              <Tabs>
                <span
                  onClick={() => {
                    console.log('today');
                  }}
                >
                  Hoy
                </span>
                <span
                  data-active={true}
                  onClick={() => {
                    console.log('week');
                  }}
                >
                  Esta semana
                </span>
                <span
                  onClick={() => {
                    console.log('september');
                  }}
                >
                  Septiembre
                </span>
              </Tabs>
              <span className="flex justify-end mt-4">
                <div className="w-1/2">
                  <Filter open={true} onClick={() => {}}>
                    <div className="flex flex-col py-4">
                      <span className="text-secondary flex whitespace-nowrap items-center space-x-3">
                        <input type="checkbox" id="datafono" />{' '}
                        <label htmlFor="datafono" className="cursor-pointer">
                          Cobro con datafono
                        </label>
                      </span>
                      <span className="text-secondary flex whitespace-nowrap items-center space-x-3">
                        <input type="checkbox" id="link" />{' '}
                        <label htmlFor="link" className="cursor-pointer">
                          Cobro con link de pagos
                        </label>
                      </span>
                      <span className="text-secondary flex whitespace-nowrap items-center space-x-3">
                        <input type="checkbox" id="all" />{' '}
                        <label htmlFor="all" className="cursor-pointer">
                          Ver todos
                        </label>
                      </span>
                      <span className="text-center w-full">
                        <button className="mt-4 px-14 py-2 bg-primary hover:opacity-20 rounded-full font-bold text-white">
                          Aplicar
                        </button>
                      </span>
                    </div>
                  </Filter>
                </div>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <Table title="Total de ventas de septiembre">
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
                    <p className="whitespace-nowrap text-grisclaro">
                      GZEN23784UBV2
                    </p>
                  </div>
                  <div>
                    <span className="text-azul">$25.000</span>
                    <span className="text-grisclaro">Deducción Bold</span>
                    <span className="text-rojo">-$1.5000</span>
                  </div>
                </Row>
              ))}
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};
