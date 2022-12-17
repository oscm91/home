import React, { useLayoutEffect, useState } from 'react';
import {
  CalculatorImage,
  HomeSolid,
  SignOutAltSolid,
  ToolsSolid,
} from '../images';
import { Card } from '../card';
import { Filter } from '../filter';
import { Head, Row, Table } from '../table';
import { Tabs } from '../tabs';
import { Menu, MenuItem } from '../menu';

export interface DashboardProps {
  facade: any;
  history: any;
}

export function Dashboard({ facade, history }: DashboardProps) {
  const [openFilter, setOpenFilter] = useState(true);
  const { filtered, list } = facade.getState() || { filtered: [] };
  const dataTitle = {
    today: 'de hoy',
    week: 'de esta semana',
    september: 'de septiembre',
  };

  useLayoutEffect(() => {
    facade.getData(facade.getSearch());
  }, []);

  return (
    <div className="flex overflow-y-auto relative flex-row h-screen bg-backcontent">
      <div className="sticky top-0 flex-none">
        <div className="inline-flex overflow-hidden flex-col justify-between px-2 h-screen bg-white rounded-l-xl">
          <Menu>
            <MenuItem
              data-active={'/' === history.getPathname}
              onClick={() => {
                history.goTo('/');
              }}
            >
              <HomeSolid />
            </MenuItem>
            <MenuItem
              data-active={'/dashboard' === history.getPathname}
              onClick={() => {
                history.goTo('/dashboard');
              }}
            >
              <ToolsSolid />
            </MenuItem>
          </Menu>
          <Menu>
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
                  ${new Intl.NumberFormat('es-ES').format(facade.total || 0)}
                </h4>
                <p className="text-primary text-xs">Pesos Colombianos</p>
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
                  <Filter open={openFilter} onClick={setOpenFilter}>
                    <div className="flex flex-col py-4">
                      <span className="text-secondary flex flex-col whitespace-nowrap items-center space-x-3">
                        <label
                          htmlFor="product"
                          className="font-bold text-lg text-secondary cursor-pointer"
                        >
                          Seleccione pizza
                        </label>
                        <select
                          id="product"
                          className="appearance-none py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none"
                          value={facade.product}
                          onChange={(e) => {
                            facade.setProduct(e.target.value);
                          }}
                        >
                          <option></option>
                          {Object.keys(list).map((productName) => {
                            return (
                              <option value={productName}>{productName}</option>
                            );
                          })}
                        </select>
                      </span>
                      <span className="text-secondary flex flex-col whitespace-nowrap items-center space-x-3">
                        <label
                          htmlFor="name"
                          className="font-bold text-lg text-secondary cursor-pointer"
                        >
                          Nombre de usuario
                        </label>
                        <input
                          id="name"
                          value={facade.buyer}
                          className="py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none"
                          onChange={(e) => {
                            facade.setBuyer(e.target.value);
                          }}
                          type="text"
                        />
                      </span>
                      <span className="text-center w-full">
                        <button
                          className="mt-4 px-14 py-2 bg-primary hover:opacity-20 rounded-full font-bold text-white"
                          onClick={async () => {
                            await facade.sellProduct();
                            setOpenFilter(false);
                          }}
                        >
                          Vender
                        </button>
                      </span>
                    </div>
                  </Filter>
                </div>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <Table title="Total de ventas">
              <Head>
                <div>Comprador</div>
                <div>Fecha y hora</div>
                <div>Método de pago</div>
                <div>ID transacción</div>
                <div>Monto</div>
              </Head>
              {filtered.map((item: any, i) => (
                <Row index={i} key={item.id}>
                  <div>
                    <span className="flex">
                      <CalculatorImage width="15px" /> {item.transaction_name}
                    </span>
                  </div>
                  <div>
                    <p className="whitespace-nowrap text-grisclaro">
                      {item.date}
                    </p>
                  </div>
                  <div>
                    <p className="whitespace-nowrap text-grisclaro">
                      {item.payment_method}
                    </p>
                  </div>
                  <div>
                    <p className="whitespace-nowrap text-grisclaro truncate">
                      {item.transaction_id}
                    </p>
                  </div>
                  <div>
                    <span className="text-azul">{item.amount}</span>
                    <span className="text-grisclaro">Descuento</span>
                    <span className="text-rojo">{item.deductions}</span>
                  </div>
                </Row>
              ))}
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
