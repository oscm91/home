import React from 'react';
import {
  HomeSolid,
  Menu,
  MenuItem,
  SignOutAltSolid,
  ToolsSolid,
  Order,
  OrderItem,
  PizzaSliceSolid,
  Card,
  IngredientItem,
  PepperHotSolid,
  Ingredient,
  MassItem,
  Mass,
} from '../../index';

export default {
  component: () => {},
  title: 'Pages/Home',
};

export const home = () => {
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-secondary">
              Nombre de la pizza
            </h2>
            <input
              className="py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="font-bold text-lg text-secondary mb-2">
              Ingredientes
            </h2>
            <Ingredient>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 1');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 2');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 3');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 4');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 5');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 6');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 7');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 8');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
              <IngredientItem
                onClick={() => {
                  console.log('ingredient 9');
                }}
              >
                <PepperHotSolid />
                <p>Pizza</p>
              </IngredientItem>
            </Ingredient>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-secondary mb-2">Base</h2>
            <Mass>
              <MassItem
                onClick={() => {
                  console.log('ingredient 1');
                }}
              >
                <PizzaSliceSolid />
                <p>
                  Base Pizza Italiana{' '}
                  <span className="block text-xs text-secondary">$ 7.4</span>
                </p>
              </MassItem>
              <MassItem
                onClick={() => {
                  console.log('ingredient 2');
                }}
              >
                <PizzaSliceSolid />
                <p>
                  Base Pizza Italiana{' '}
                  <span className="block text-xs text-secondary">$ 7.4</span>
                </p>
              </MassItem>
            </Mass>
          </div>
        </main>
        <div className="flex-col flex-none space-y-4 pb-4">
          <Card title="Total">
            <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-primary">
              $1'560.000
            </h4>
            <p className="text-xs text-primary">Septiembre 21</p>
          </Card>
          <Order>
            <OrderItem
              onClick={() => {
                console.log('ingredient 1');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 2');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 3');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 4');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 5');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 6');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 7');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 8');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
            <OrderItem
              onClick={() => {
                console.log('ingredient 9');
              }}
            >
              <PizzaSliceSolid />
              <p>
                Base Pizza Italiana{' '}
                <span className="block text-xs text-secondary">x 1</span>
              </p>
            </OrderItem>
          </Order>
          <span className="w-full text-center">
            <button
              className="py-2 px-14 mt-4 font-bold text-white rounded-full bg-primary hover:opacity-20"
              onClick={() => {}}
            >
              Crear Pizza
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
