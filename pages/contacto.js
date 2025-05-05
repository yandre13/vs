import React, { useEffect, useState } from 'react'
import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import { useAppWidth } from 'context'
import useMedia from 'hooks/useMedia'
import { motion } from 'framer-motion'
import ButtonWsp from 'components/ButtonWsp'
import useLoaded from 'hooks/useLoaded'
import SEO from 'components/SEO'

const metadata = {
  title: 'Contáctanos para Servicios de Arquitecto en Perú - Visualiza.pe',
  description:
    'Comunícate con un arquitecto en Perú para desarrollar y visualizar tu próximo proyecto arquitectónico.',
  open_graph: {
    url: 'https://www.visualiza.pe/contacto',
    image: '/img/contacto.webp',
  },
}

export default function Home() {
  const [zohoForm, setZohoForm] = useState('')    // HTML del formulario Zoho
  const [width] = useAppWidth()                   // ancho para márgenes dinámicos
  const isMobile = useMedia('(max-width: 767px)') // detecta móvil
  const loaded = useLoaded()                      // listo para animar

  useEffect(() => {
    fetch('/form_zoho.html')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar form_zoho.html')
        return res.text()
      })
      .then(html => {
        setZohoForm(html)

        // — Inyectar validación y tooltips —
        const validateScript = document.createElement('script')
        validateScript.text = `
          function addAriaSelected6461872000001294544() {
            var el = event.target;
            var prev = el.querySelector('[aria-selected=true]');
            if (prev) prev.removeAttribute('aria-selected');
            el.querySelectorAll('option')[el.selectedIndex].ariaSelected = 'true';
          }
          function validateEmail6461872000001294544() {
            var form = document.forms['WebToLeads6461872000001294544'];
            var emails = form.querySelectorAll('[ftype=email]');
            for (var i = 0; i < emails.length; i++) {
              var v = emails[i].value.trim();
              if (v) {
                var at = v.indexOf('@'), dot = v.lastIndexOf('.');
                if (at < 1 || dot < at + 2 || dot + 2 >= v.length) {
                  alert('Introduzca una dirección de correo electrónico válida.');
                  emails[i].focus();
                  return false;
                }
              }
            }
            return true;
          }
          function checkMandatory6461872000001294544() {
            var m = ['Company','Last Name','Email','Phone'],
                l = ['Empresa','Nombre completo','Correo electrónico','Teléfono'];
            for (var i = 0; i < m.length; i++) {
              var f = document.forms['WebToLeads6461872000001294544'][m[i]];
              if (f) {
                var v = f.value.trim();
                if (!v || (f.nodeName === 'SELECT' && v === '-None-')) {
                  alert(l[i] + ' no puede estar vacío.');
                  f.focus();
                  return false;
                }
              }
            }
            trackVisitor6461872000001294544();
            return validateEmail6461872000001294544();
          }
          function tooltipShow6461872000001294544(el) {
            var tip = el.nextElementSibling;
            tip.style.display = tip.style.display === 'none' ? 'block' : 'none';
          }
        `
        document.body.appendChild(validateScript)

        // — Inyectar VisitorTracking —
        const visitorScript = document.createElement('script')
        visitorScript.id = 'VisitorTracking'
        visitorScript.defer = true
        visitorScript.text = `
          var $zoho = $zoho || {};
          $zoho.salesiq = $zoho.salesiq || {
            widgetcode:'siq1d987b3e8d606e8cc9439a9455f015d12a2ed8a02b14274fe91bf7206d034b70',
            values:{}, ready:function(){}
          };
          (function(d){
            var s = d.createElement('script');
            s.id='zsiqscript'; s.defer=true;
            s.src='https://salesiq.zoho.com/widget';
            d.getElementsByTagName('script')[0]
             .parentNode.insertBefore(s, d.getElementsByTagName('script')[0]);
          })(document);
          function trackVisitor6461872000001294544() {
            try {
              var form = document.forms['WebToLeads6461872000001294544'],
                  u = form['LDTuvid'], fn = form['First Name'],
                  em = form['Email'], name;
              if (u) u.value = $zoho.salesiq.visitor.uniqueid();
              if (fn) name = fn.value + ' ' + name;
              $zoho.salesiq.visitor.name(name);
              if (em) $zoho.salesiq.visitor.email(em.value);
            } catch(e){}
          }
        `
        document.body.appendChild(visitorScript)

        // — Inyectar Analytics —
        const analyticsScript = document.createElement('script')
        analyticsScript.id = 'wf_anal'
        analyticsScript.src =
          'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=99384b86221f93b8e5d62f119d1e9008cb7b013cb407b66842193d61996f68d630119c280b129a7a1d6b203e9203580fgid4e…&tw=e956a685922384229f390cb4d907880ed0d563309857fe3ad0f8ac03abc31fe1'
        document.body.appendChild(analyticsScript)
      })
      .catch(err => console.error('Error al cargar el formulario:', err))
  }, [])

  return (
    <>
      <SEO config={metadata} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-start my-3 mx-0 md:my-4 md:ml-0 md:mr-4"
      >
        <Navbar />

        <div className="w-full md:w-[85%] lg:w-[87%] xl:w-[89%] h-auto">
          {isMobile ? (
            // MOVIL: apilar
            <>
              <h1 className="text-2xl text-center mb-4 font-sec">
                Visualiza tu próximo proyecto
              </h1>
              <div className="w-full mb-6">
                {zohoForm ? (
                  <>
                    {/* Anula el height fijado de Zoho */}
                    <style jsx global>{`
                      #crmWebToEntityForm {
                        height: auto !important;
                      }
                    `}</style>
                    <div dangerouslySetInnerHTML={{ __html: zohoForm }} />
                  </>
                ) : (
                  <p>Cargando formulario…</p>
                )}
              </div>
            </>
          ) : (
            // DESKTOP: side-by-side pegado a la derecha, 40% + 40%
            <div className="flex justify-end items-start">
              {/* Título + Formulario 40% */}
              <div className="
                w-full
                pt-4
                md:w-2/5
                md:pt-2 md:pr-2 md:mt-2
                lg:pt-8 lg:pr-2 lg:mt-[6%]
                xl:pt-10 xl:pr-8 xl:mt-[22.5%]
                2xl:pt-14 2xl:pr-10 2xl:mt-[32.1%]
                3xl:pt-14 3xl:pr-10 3xl:mt-[39%]
              ">
                <h1
                  className="md:text-xl lg:text-[1.8rem] mb-4 font-sec"
                  style={{ marginLeft: width * 0.15 }}
                >
                  Visualiza tu próximo proyecto
                </h1>
                {zohoForm ? (
                  <>
                    {/* Anula el height fijado de Zoho */}
                    <style jsx global>{`
                      #crmWebToEntityForm {
                        height: auto !important;
                      }
                    `}</style>
                    <div dangerouslySetInnerHTML={{ __html: zohoForm }} />
                  </>
                ) : (
                  <p>Cargando formulario…</p>
                )}
              </div>

              {/* Imagen 40%, sin recortes */}
              <div className="
                md:w-2/5
                md:pt-6
                lg:pt-8
                xl:pt-10
                2xl:pt-14
              ">
                <img
                  src="/img/contacto.webp"
                  alt="Sofá y lámpara"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <ButtonWsp />
      </motion.main>
    </>
  )
}
