import React, { useCallback } from 'react';
import {
  HomeSolid,
  InfoImage,
  SignOutAltSolid,
} from '../images';
import { Card } from '../card';
import { Menu, MenuItem } from '../menu';
import { Order, OrderItem } from '../order';
import FormWizard from '../formwizard/formWizard';
import { Tabs } from '@stepform/ui';

export interface HomeProps {
  facade: any;
  history: any;
}

export function Home({ facade, history }: HomeProps) {
  const { wizard, schema } = facade.getState() || {};


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
          <h2 className="bg-clip-text text-transparent bg-primary text-4xl font-bold border-b border-grisclaro pb-4">
            Landing Home
          </h2>
          <div className='pb-8'>
            <Tabs>
              {schema.map((stepSchema) => {
                return <span
                  className={`${wizard.values[stepSchema.name] ? 'bg-green' : 'bg-gray'}`}
                  data-active={wizard.stepNumber === stepSchema.index}
                  data-selectable={!!Object.keys(wizard.values).some(val=> Object.keys(stepSchema.formSchema).includes(val))}
                  onClick={() => {
                    if(Object.keys(wizard.values).some(val=> Object.keys(stepSchema.formSchema).includes(val)) || !Object.keys(stepSchema.formSchema).length){
                      facade.setStep(stepSchema.index);
                    }
                  }}
                >
                  {stepSchema.sectionTitle}
                </span>;
              })}
            </Tabs>
          </div>

          <FormWizard facade={facade} />
        </main>
        <div className="flex-col flex-none space-y-4 pb-4">
          <Card title="Resumen de orden">
            {
              wizard.values && wizard.values.amount && (<>
               <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-primary">
              $ {new Intl.NumberFormat('es-ES').format(wizard.values.amount)}
            </h4>
            <p className="text-xs text-primary">Pesos Colombianos</p>
            </>)
            }
          </Card>
          {(wizard && wizard.values && (
            <Order>
              {Object.keys(wizard.values).map((keyValue, i) => {
                const title = schema.find(stepSchema => stepSchema.formSchema[keyValue]).formSchema[keyValue].label
                return (
                  <OrderItem
                    key={keyValue + i}
                    onClick={() => {}}
                  >
                    <InfoImage />
                    <p>
                      {title}:
                      <br />
                    </p>
                    <p>{wizard.values[keyValue]}</p>
                  </OrderItem>
                );
              })}
            </Order>
          )) ||
            null}
        </div>
      </div>
    </div>
  );
}

export default Home;
