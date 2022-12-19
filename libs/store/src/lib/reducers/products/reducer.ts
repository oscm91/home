import {
  FORM_UPDATE,
  FORM_UPDATE_INFO,
  FORM_SET_STEP,
} from '../../actions/actionTypes';

export const initialState = {
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

export default (state = initialState, { type, payload }) => {
  switch (type) {
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

    case FORM_UPDATE: {
      return {
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
};
