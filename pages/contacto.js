import React, { useEffect, useState } from 'react';
import Grid from 'components/Grid';
import Navbar from 'components/Navbar';
import Image from 'next/image';
import sofaSVG from '../public/img/contacto.webp';
import { useAppQuery, useAppWidth } from 'context';
import useMedia from 'hooks/useMedia';
import { motion } from 'framer-motion';
import ButtonWsp from 'components/ButtonWsp';
import useLoaded from 'hooks/useLoaded';
import SEO from 'components/SEO';


const metadata = {
  title: 'Contáctanos para Servicios de Arquitecto en Perú - Visualiza.pe',
  description:
    'Comunícate con un arquitecto en Perú para desarrollar y visualizar tu próximo proyecto arquitectónico.',
  open_graph: {
    url: 'https://www.visualiza.pe/contacto',
    image: '/img/contacto.webp',
  },
};

export default function Home() {
  const [zohoForm, setZohoForm] = useState(''); // Estado para guardar el HTML del formulario
  const [width] = useAppWidth();
  const query = useAppQuery();
  const isMobile = useMedia('(max-width: 767px)');
  const loaded = useLoaded();

  // useEffect para cargar el formulario desde un archivo HTML
  useEffect(() => {
    fetch('/form_zoho.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar form-zoho.html');
        }
        return response.text();
      })
      .then(html => {
        setZohoForm(html);
        // Paso 2: Inyectar manualmente el script que define las funciones de validación
        // Puedes copiar aquí el contenido de los scripts que Zoho te proporciona
        const script = document.createElement('script');
        script.text = `
           function validateEmail6461872000001294544 (){
        var form = document.forms['WebToLeads6461872000001294544'];
        var emailFld = form.querySelectorAll('[ftype=email]');
        for(var i = 0; i < emailFld.length; i++ ){
          var emailVal = emailFld[i].value;
          if(emailVal.trim().length != 0){
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
              alert('Introduzca una dirección de correo electrónico válida.');
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      }
      function checkMandatory6461872000001294544 (){
        var mndFileds = new Array('Last Name','Email','Phone');
        var fldLangVal = new Array('Nombre completo','Correo electrónico','Teléfono');
        for(var i = 0; i < mndFileds.length; i++ ){
          var fieldObj = document.forms['WebToLeads6461872000001294544'][mndFileds[i]];
          if(fieldObj){
            if(fieldObj.value.trim().length == 0){
              if(fieldObj.type == 'file'){
                alert('Seleccione un archivo para cargar.');
                fieldObj.focus();
                return false;
              }
              alert(fldLangVal[i] + ' no puede estar vacío.');
              fieldObj.focus();
              return false;
            }
            else if(fieldObj.nodeName === 'SELECT'){
              if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                alert(fldLangVal[i] + ' no puede ser nulo.');
                fieldObj.focus();
                return false;
              }
            }
            else if(fieldObj.type === 'checkbox'){
              if(fieldObj.checked === false){
                alert('Please accept ' + fldLangVal[i]);
                fieldObj.focus();
                return false;
              }
            }
            try {
              if(fieldObj.name === 'Last Name'){
                name = fieldObj.value;
              }
            } catch(e){}
          }
        }
        trackVisitor6461872000001294544();
        if(!validateEmail6461872000001294544()){
          return false;
        }
        var urlparams = new URLSearchParams(window.location.search);
        if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
          var webform = document.getElementById('webform6461872000001294544');
          var service = urlparams.get('service');
          var smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type', 'hidden');
          smarturlfield.setAttribute('value', service);
          smarturlfield.setAttribute('name', 'service');
          webform.appendChild(smarturlfield);
        }
        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      }
      function tooltipShow6461872000001294544(el){
        var tooltip = el.nextElementSibling;
        if(tooltip.style.display === 'none'){
          var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
          for(var i = 0; i < allTooltip.length; i++){
            allTooltip[i].style.display = 'none';
          }
          tooltip.style.display = 'block';
        } else {
          tooltip.style.display = 'none';
        }
      }
        `;
        document.body.appendChild(script);

        // 3. Inyectar el script de VisitorTracking de Zoho
    const visitorScript = document.createElement('script');
    visitorScript.type = 'text/javascript';
    visitorScript.id = 'VisitorTracking';
    visitorScript.defer = true;
    visitorScript.text = `
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: 'siq1d987b3e8d606e8cc9439a9455f015d12a2ed8a02b14274fe91bf7206d034b70',
        values: {},
        ready: function(){}
      };
      var d = document;
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.id = 'zsiqscript';
      s.defer = true;
      s.src = 'https://salesiq.zoho.com/widget';
      var t = d.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s, t);
      function trackVisitor6461872000001294544() {
        try {
          if ($zoho) {
            var LDTuvidObj = document.forms['WebToLeads6461872000001294544']['LDTuvid'];
            if (LDTuvidObj) {
              LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
            }
            var firstnameObj = document.forms['WebToLeads6461872000001294544']['First Name'];
            if (firstnameObj) {
              name = firstnameObj.value + ' ' + name;
            }
            $zoho.salesiq.visitor.name(name);
            var emailObj = document.forms['WebToLeads6461872000001294544']['Email'];
            if (emailObj) {
              email = emailObj.value;
              $zoho.salesiq.visitor.email(email);
            }
          }
        } catch(e){}
      }
    `;
    document.body.appendChild(visitorScript);

      })
      .catch(error => console.error('Error al cargar el formulario:', error));
  }, []);

  const size = React.useMemo(() => {
    if (query === 'xl') {
      return {
        imgWidth: 7,
        textWidth: 4,
      };
    } else if (query === 'lg') {
      return {
        imgWidth: 6,
        textWidth: 7,
      };
    } else if (query === 'md') {
      return {
        imgWidth: 5.5,
        textWidth: 4,
      };
    } else {
      return {
        imgWidth: 6,
        textWidth: 6,
      };
    }
  }, [query]);

  return (
    <>
      <SEO config={metadata} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap my-3 mx-0 md:my-4 md:ml-0 md:mr-4"
      >
        <Navbar />
        <div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
          <Grid hidden />
          <div className={`flex flex-col ${isMobile ? 'items-center' : 'flex-row'}`}>
            <h1
              className={`font-sec ${isMobile ? 'text-2xl text-center mb-4' : 'md:text-2xl lg:text-3xl'} pl-1`}
              style={{
                width: '100%',
                marginTop: `${width * (isMobile ? 1.5 : 0.6)}px`,
                marginLeft: `${width * (isMobile ? 0 : 0.7)}px`,
              }}
            >
              Visualiza tu próximo proyecto
            </h1>
              {/* Formulario incrustado
            <div className={mt-4 ${isMobile ? 'w-full' : 'w-1/3'}} >
              <iframe
                aria-label='Contacto Página Web'
                frameBorder="0"
                style={{ height: "800px", width: "100%", border: "none" }} // Altura a 800px y ancho completo
                src='https://forms.zohopublic.com/digitalizala/form/ContactoVisualiza/formperma/KVySmLfDTieWktj6EWyqsHZdKfMmVhB9b-YojiPhn-c'
              ></iframe>
            </div> */}

            {/* Formulario incrustado */}
            <div className={`mt-4 ${isMobile ? 'w-full' : 'w-1/3'}`}>
              {zohoForm ? (
                // Inyectamos el contenido HTML usando dangerouslySetInnerHTML
                <div dangerouslySetInnerHTML={{ __html: zohoForm }} />
              ) : (
                <p>Cargando formulario...</p>
              )}
            </div>


            {/* Imagen del sofá, visible solo en escritorio */}
            {!isMobile && (
              <div
                className="absolute top-0 right-0 w-1/2 md:h-[61%] lg:h-[62%] xl:h-[62%]"
                style={{
                  marginTop: `${width * (isMobile ? 1.5 : 0.6)}px`,
                }}
              >
                <Image
                  src={sofaSVG}
                  alt="Silla en fondo amarillo"
                  layout="fill"
                  className="scale-10"
                />
              </div>
            )}
          </div>
        </div>
        <ButtonWsp />
      </motion.main>
    </>
  );
}
