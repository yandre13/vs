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
    console.log(formData);
  };

  return (
    <div>
      <h2>Comienza a Visualizar tu Próximo Proyecto</h2>
      {/* Formulario incrustado */}
      <div className={` ${isMobile ? 'w-full' : 'w-1/3'}`}>
        <iframe
          aria-label='Contacto Página Web'
          frameBorder="0"
          style={{ height: "800px", width: "100%", border: "none" }} // Cambié la altura a 800px
          src='https://forms.zohopublic.com/visualiza/form/ContactoPaginaWeb/formperma/mn_4Lw0wSRSK6cpD-SzVf0SoaXtR-D1kRN-PMwf6r8Q'
        ></iframe>

      </div>

    </div>
  );
};

export default ContactForm;
