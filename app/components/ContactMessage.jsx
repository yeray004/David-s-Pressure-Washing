'use client'
import React, { useState } from 'react';
import ReactWhatsapp from 'react-whatsapp';

export default function ContactMessage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mensaje: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, address, mensaje } = formData;
    const message = `name: ${name}\nAddress: ${address}\nMessage: ${mensaje}`;
    // Aquí podrías enviar el mensaje de WhatsApp usando la librería o realizar otra acción con los datos del formulario
    console.log('Datos del formulario:', formData);
    console.log('Mensaje de WhatsApp:', message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="address">Dirección:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        required
      ></textarea>

      <ReactWhatsapp
        number='57-313-474-6663'
        message={`name: ${formData.name}\nDirección: ${formData.address}\nMensaje: ${formData.mensaje}`}
      >
        <button type="submit">Enviar Mensaje</button>
      </ReactWhatsapp>
    </form>
  );
}
