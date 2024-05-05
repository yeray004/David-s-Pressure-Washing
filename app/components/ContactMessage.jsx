'use client'
import { useState, useRef } from 'react';

export default function ContactMessage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef(null); // Referencia al formulario

  const closeModal = () => {
    setShowSuccessMessage(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get('message'));
    console.log(formData.get('address'));
    const sms = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      message: formData.get('message'),
    };

    const res = await fetch('/api/sms', {
      method: 'POST',
      body: JSON.stringify(sms),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setShowSuccessMessage(true); // Mostrar mensaje de éxito
      formRef.current.reset();// Limpiar los campos del formulario después de enviarlo
    } else if (res.status === 400) {
      const data = await res.json();
      console.log(data.error);
      alert('All fields are required')
    } else {
      console.error('Error sending the message:', res.statusText);
      alert(`${res.statusText}, the message could not be sent`)
    }
  };

  return (
    <>
      {showSuccessMessage && (
        <div className='sms-modal'>
          <div className='sms-modal-content'>
            <span className='sms-close' onClick={closeModal}>&times;</span>
            <p>Message sent successfully</p>
          </div>
        </div>
      )}
      <form onSubmit={onSubmit} ref={formRef}>
        <input required name='name' type='text' placeholder='Write your name' />
        <input required name='phone' type='tel' placeholder='Write your phone number' />
        <input required name='address' type='text' placeholder='Write your address' />
        <textarea required name='message' placeholder='Write your message' />
        <button className='btn-style-1'>Send request</button>
      </form>
    </>
  );
}
