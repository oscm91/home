import React, { useCallback } from 'react';
import {
  HomeSolid,
  PepperHotSolid,
  PizzaSliceSolid,
  SignOutAltSolid,
  ToolsSolid,
} from '../images';
import { Card } from '../card';
import { Menu, MenuItem } from '../menu';
import { Ingredient, IngredientItem } from '../ingredient';
import { Mass, MassItem } from '../mass';
import { Order, OrderItem } from '../order';

export interface HomeProps {
  facade: any;
  history: any;
}

export function Home({ facade, history }: HomeProps) {
  const { ingredients, mass, product } = facade.getState() || {
    ingredients: [],
    mass: [],
    product: {
      name: '',
      ingredients: [],
      mass: undefined,
      price: 0,
      resume: [],
      isCompleted: false,
    },
  };

  const addIngredient = useCallback(
    (ingredientName) => {
      facade.addIngredient(ingredientName);
    },
    [facade.addIngredient]
  );

  const removeIngredient = useCallback(
    (ingredientName) => {
      facade.removeIngredient(ingredientName);
    },
    [facade.removeIngredient]
  );

  const addMass = useCallback(
    (massName) => {
      facade.addMass(massName);
    },
    [facade.addMass]
  );

  const removeMass = useCallback(
    (massName) => {
      facade.removeMass(massName);
    },
    [facade.removeMass]
  );

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
          <h2 className="font-bold text-lg text-primary pb-8">
            Crear nueva pizza
          </h2>
          <div className="flex justify-start space-x-2 items-center mb-4">
            <h2 className="font-bold text-lg text-secondary">
              Nombre de la pizza
            </h2>
            <input
              value={product.name}
              onChange={(e) => facade.setName(e.target.value)}
              className="py-2 px-14 font-bold text-secondary rounded-full border-2 border-primary bg-white hover:opacity-20 focus:opacity-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="font-bold text-lg text-secondary mb-2">
              Ingredientes
            </h2>
            <Ingredient>
              {ingredients.map(({ name }, i) => {
                return (
                  <IngredientItem
                    key={name + i}
                    onClick={() => {
                      addIngredient(name);
                    }}
                  >
                    <PepperHotSolid />
                    <p>{name}</p>
                  </IngredientItem>
                );
              })}
            </Ingredient>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-secondary mb-2">Base</h2>
            <Mass>
              {mass.map(({ name, price }, i) => {
                return (
                  <MassItem
                    key={name + i}
                    onClick={() => {
                      addMass(name);
                    }}
                  >
                    <PizzaSliceSolid />
                    <p>
                      {name}
                      <span className="block text-xs text-secondary">
                        $ {new Intl.NumberFormat('es-ES').format(price)}
                      </span>
                    </p>
                  </MassItem>
                );
              })}
            </Mass>
          </div>
        </main>
        <div className="flex-col flex-none space-y-4 pb-4">
          <Card title="Total de la pizza">
            <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-primary">
              $ {new Intl.NumberFormat('es-ES').format(product.price)}
            </h4>
            <p className="text-xs text-primary">Pesos Colombianos</p>
          </Card>
          {(product.resume && product.resume.length && (
            <Order>
              {product.resume.map(({ name, price, quantity, type }, i) => {
                return (
                  <OrderItem
                    key={name + i}
                    onClick={() => {
                      if (type === 'ingredient') {
                        removeIngredient(name);
                      } else {
                        removeMass(name);
                      }
                    }}
                  >
                    {type === 'ingredient' ? (
                      <PepperHotSolid />
                    ) : (
                      <PizzaSliceSolid />
                    )}
                    <p>
                      {name}
                      {type === 'ingredient' && (
                        <span className="block text-xs text-secondary">
                          x {quantity}
                        </span>
                      )}
                    </p>
                    {new Intl.NumberFormat('es-ES').format(price)}
                  </OrderItem>
                );
              })}
            </Order>
          )) ||
            null}
          <span className="w-full text-center">
            <button
              disabled={!product.isCompleted}
              className={`py-2 px-14 mt-4 font-bold text-white rounded-full bg-primary hover:opacity-20 ${
                product.isCompleted ? '' : 'opacity-20'
              }`}
              onClick={async () => {
                await facade.saveProduct();
                window.alert(
                  'Se a creado la pizza, puedes ir a la opción de ventas en el menú, para continuar la venta'
                );
              }}
            >
              Crear Pizza
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
