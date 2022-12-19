import {
  PRODUCTS_SET_NAME,
  PRODUCTS_ADD_MASS,
  PRODUCTS_UPDATE,
  PRODUCTS_ADD_INGREDIENT,
  PRODUCTS_REMOVE_INGREDIENT,
  PRODUCTS_REMOVE_MASS,
  PRODUCTS_SAVE,
  FORM_UPDATE_INFO,
  FORM_SET_STEP,
} from '../../actions/actionTypes';

export const initialState = {
  ingredients: [
    {
      name: 'Pollo',
      price: 5000,
    },
    {
      name: 'Peperoni',
      price: 4500,
    },
    {
      name: 'Maiz',
      price: 3000,
    },
    {
      name: 'Tomate',
      price: 3000,
    },
    {
      name: 'Ají',
      price: 3000,
    },
    {
      name: 'Maduro',
      price: 3000,
    },
    {
      name: 'Champiñones',
      price: 3000,
    },
    {
      name: 'Carne de res',
      price: 3000,
    },
    {
      name: 'Aguacate',
      price: 3000,
    },
    {
      name: 'Cebolla',
      price: 3000,
    },
    {
      name: 'Jamón',
      price: 3000,
    },
    {
      name: 'Queso',
      price: 3000,
    },
    {
      name: 'Anchoas',
      price: 3000,
    },
    {
      name: 'Salmón',
      price: 3000,
    },
    {
      name: 'Espárragos',
      price: 3000,
    },
    {
      name: 'habichuela',
      price: 3000,
    },
  ],
  mass: [
    {
      name: 'Base de harina',
      price: 10000,
    },
    {
      name: 'Base de avena',
      price: 15000,
    },
  ],
  product: {
    name: '',
    ingredients: [],
    mass: undefined,
    price: 0,
    resume: [],
    isCompleted: false,
  },
  list: [],
  wizard: {
    stepNumber: 0,
    values: {}
  },
  schema: [
    {
      index: 0,
      name: 'user',
      sectionTitle: 'Paso 0',
      formSchema: {
      }
    },
    {
      index: 1,
      name: 'user-name',
      sectionTitle: 'Paso 1',
      formSchema: {
        name: {
          type: 'text',
          label: 'Nombre y Apellidos',
          required: true,
        }
      }
    },
    {
      index: 2,
      name: 'user-email',
      sectionTitle: 'Paso 2',
      formSchema: {
        email: {
          type: "email",
          label: "Correo",
          required: true
        }
      }
    },
    {
      index: 3,
      name: 'user-address',
      sectionTitle: 'Paso 3',
      formSchema: {
        address: {
          type: "address",
          label: "Dirección del apartamento",
          required: true
        }
      }
    },
    {
      index: 4,
      name: 'user-floor',
      sectionTitle: 'Paso 4',
      formSchema: {
        floor: {
          type: "number",
          label: "Piso",
          required: true
        }
      }
    },
    {
      index: 5,
      name: 'user-apartment',
      sectionTitle: 'Paso 5',
      formSchema: {
        bbq: {
          type: "checkbox",
          label: "Zona BBQ",
          required: false
        },
        room: {
          type: "checkbox",
          label: "Salón Comunal",
          required: false
        },
        park: {
          type: "checkbox",
          label: "Parque de Juegos",
          required: false
        }
      }
    },
    {
      index: 6,
      name: 'user-parking-lot',
      sectionTitle: 'Paso 6',
      formSchema: {
        parqueadero: {
          type: "select",
          label: "Tipo de parqueadero",
          required: true,
          options: [
              {
                  label: "Cubierto",
                  value: "cubierto"
              },
              {
                  label: "Descubierto",
                  value: "descubierto"
              },
              {
                  label: "No aplica",
                  value: "noaplica"
              }
          ]
        }
      }
    },
    {
      index: 7,
      name: 'user-sale-amount',
      sectionTitle: 'Paso 7',
      formSchema: {
        amount: {
          type: "number",
          label: "Monto de venta",
          required: true
        }
      }
    },
    {
      index: 8,
      name: 'user-photo',
      sectionTitle: 'Paso 8',
      formSchema: {
        photo: {
          type: "image",
          label: "Foto del inmueble",
          accept: "image/*",
          required: true
        }
      }
    },
    {
      index: 9,
      name: 'user-lift',
      sectionTitle: 'Paso 9',
      formSchema: {
        ascensor: {
          type: "select",
          label: "Tipo de ascensor",
          required: true,
          options: [
              {
                  label: "Ascensor",
                  value: "ascensor"
              },
              {
                  label: "Sin ascensor",
                  value: "ascensor"
              }
          ]
      }
      }
    }
  ]
};

const getPrice = (mass, ingredients) => {
  const massPrice = (mass && mass.price) || 0;
  const ingredientsPrice =
    ingredients && ingredients.length
      ? ingredients.reduce((total, ingredient) => {
          return total + (ingredient.price || 0);
        }, 0)
      : 0;

  return massPrice + ingredientsPrice;
};

const getResume = (mass, ingredients) => {
  const resume = [];
  if (mass) {
    resume.push({
      ...mass,
      type: 'mass',
      quantity: 1,
    });
  }

  if (ingredients && ingredients.length) {
    const resumeIngredients = ingredients.reduce((resume, ingredient) => {
      const resumeIngredient = resume[ingredient.name] || {};
      return {
        ...resume,
        [ingredient.name]: {
          ...ingredient,
          price: (resumeIngredient.price || 0) + ingredient.price,
          type: 'ingredient',
          quantity: (resumeIngredient.quantity || 0) + 1,
        },
      };
    }, {});
    resume.push(...Object.values(resumeIngredients));
  }

  return resume;
};

const isComplete = (name, mass, ingredients) => {
  return !!(name && mass && ingredients && ingredients.length);
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_SET_NAME: {
      return {
        ...state,
        product: {
          ...state.product,
          name: payload,
          isCompleted: isComplete(
            payload,
            state.product.mass,
            state.product.ingredients
          ),
        },
      };
    }
    case PRODUCTS_ADD_MASS: {
      const nameBase = payload;
      const mass = state.mass.find((mass) => mass.name === nameBase);

      return {
        ...state,
        product: {
          ...state.product,
          mass: mass,
          price: getPrice(mass, state.product.ingredients),
          resume: getResume(mass, state.product.ingredients),
          isCompleted: isComplete(
            state.product.name,
            mass,
            state.product.ingredients
          ),
        },
      };
    }

    case PRODUCTS_REMOVE_MASS: {
      const mass = undefined;

      return {
        ...state,
        product: {
          ...state.product,
          mass: mass,
          price: getPrice(mass, state.product.ingredients),
          resume: getResume(mass, state.product.ingredients),
          isCompleted: isComplete(
            state.product.name,
            mass,
            state.product.ingredients
          ),
        },
      };
    }

    case PRODUCTS_ADD_INGREDIENT: {
      const nameBase = payload;
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient.name === nameBase
      );
      const ingredients = [].concat(state.product.ingredients, ingredient);

      return {
        ...state,
        product: {
          ...state.product,
          ingredients: ingredients,
          price: getPrice(state.product.mass, ingredients),
          resume: getResume(state.product.mass, ingredients),
          isCompleted: isComplete(
            state.product.name,
            state.product.mass,
            ingredients
          ),
        },
      };
    }

    case PRODUCTS_REMOVE_INGREDIENT: {
      const nameBase = payload;
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient.name === nameBase
      );

      let isRemoved = false;

      const ingredients = state.product.ingredients.filter((item) => {
        if (item.name === ingredient.name && !isRemoved) {
          isRemoved = true;
          return false;
        }
        return true;
      });

      return {
        ...state,
        product: {
          ...state.product,
          ingredients: ingredients,
          price: getPrice(state.product.mass, ingredients),
          resume: getResume(state.product.mass, ingredients),
          isCompleted: isComplete(
            state.product.name,
            state.product.mass,
            ingredients
          ),
        },
      };
    }

    case PRODUCTS_SAVE: {
      return {
        ...state,
        list: {
          ...state.list,
          [state.product.name]: state.product,
        },
        product: initialState.product,
      };
    }

    /** */

    case FORM_UPDATE_INFO: {
      return {
        ...state,
        wizard: {
          ...state.wizard,
          stepNumber: payload.stepNumber,
          values: {
            ...state.wizard.values,
            ...payload.values,
          }
        }
      }
    }

    case FORM_SET_STEP: {
      return {
        ...state,
        wizard: {
          ...state.wizard,
          stepNumber: payload,
        }
      }
    }

    case PRODUCTS_UPDATE: {
      return {
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
};
