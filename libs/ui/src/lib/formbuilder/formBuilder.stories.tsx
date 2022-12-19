import React from 'react';

import FormBuilder from './formBuilder';

export default {
  component: () => {},
  title: 'Form Builder',
};

export const formBuilder = () => {
  return (
    <>
    <FormBuilder formSchema={{
        name: {
          type: 'text',
          label: 'Nombre y apellidos',
          required: true,
        }
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
        email: {
          type: "email",
          label: "Correo",
          required: true
        }
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
        address: {
          type: "address",
          label: "Dirección del apartamento",
          required: true
        }
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
        piso: {
          type: "number",
          label: "Piso",
          required: true
        }
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
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
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
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
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
        monto: {
          type: "number",
          label: "Monto de venta",
          required: true
        }
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
        foto: {
          type: "image",
          label: "Foto del inmueble",
          accept: "image/*",
          required: true
        }
      }} formData={{}} />
    <br />
    <FormBuilder formSchema={{
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
      }} formData={{}} />
  </>
  );
};
