import React from 'react';

import FormBuilder from './formBuilder';

export default {
  component: () => {},
  title: 'Form Builder',
};

export const formBuilder = () => {
  return (
    <>
    <FormBuilder formSchema={
      {
        name: {
          type: 'text',
          label: 'Nombre y apellidos',
          required: true,
        }
      }
    } />
    <br />
    <FormBuilder formSchema={
      {
        email: {
          type: "email",
          label: "Correo",
          required: true
        }
      }
    } />
    <br />
    <FormBuilder formSchema={
      {
        address: {
          type: "address",
          label: "Dirección del apartamento",
          required: true
        }
      }
    } />
    <br />
    <FormBuilder formSchema={
      {
        piso: {
          type: "number",
          label: "Piso",
          required: true
        }
      }
    } />
    <br />
    <FormBuilder formSchema={
      {
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
    } />
    <br />
    <FormBuilder formSchema={
      {
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
    } />
    <br />
    <FormBuilder formSchema={
      {
        monto: {
          type: "number",
          label: "Monto de venta",
          required: true
        }
      }
    } />
    <br />
    <FormBuilder formSchema={
      {
        foto: {
          type: "image",
          label: "Foto del inmueble",
          accept: "image/*",
          required: true
        }
      }
    } />
    <br />
    <FormBuilder formSchema={
      {
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
    } />
  </>
  );
};
