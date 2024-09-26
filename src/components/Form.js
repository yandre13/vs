import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Renders 3D',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Comienza a Visualizar tu Próximo Proyecto</h2>

      <label htmlFor="fullName">Full name *</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email *</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="projectType">Selecciona el tipo de proyecto</label>
      <select
        name="projectType"
        id="projectType"
        value={formData.projectType}
        onChange={handleChange}
      >
        <option value="Renders 3D">Renders 3D</option>
        <option value="Recorridos Virtuales 360°">Recorridos Virtuales 360°</option>
        <option value="Vistas Aéreas con Drones">Vistas Aéreas con Drones</option>
        <option value="Fotogrametría y Levantamientos">Fotogrametría y Levantamientos</option>
        <option value="Topográficas">Topográficas</option>
        <option value="Diseño de Fachadas e Interiorismo">Diseño de Fachadas e Interiorismo</option>
        <option value="Marketing Inmobiliario">Marketing Inmobiliario</option>
      </select>

      <button type="submit">Contactar</button>
    </form>
  );
};

export default ContactForm;
