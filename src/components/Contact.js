import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [message, setMessage] = useState(``);
  const [messagemSucesso, setMessagemSucesso] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    
    if(name === '' || email === '' || message === '') {
      alert("Por favor preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_satccup", "template_2j8g3mt", templateParams, "qhMyQtCWQ3IEnO8Hc")
    .then((response) => {
        console.log('ENVIADO', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setMessagemSucesso(true);
        setTimeout(() => {
          setMessagemSucesso(false);
        }, 5000);

      }, (err) => {
        console.log('erro', err)
      })
      
    
  }

  return (
    <section className='py-10 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Entre em Contato</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Vamos trabalhar <br/>juntos!
              </h2>
            </div>
            {messagemSucesso ? (
                <motion.div 
                key="success"variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                  className='bg-lime-600 w-80 rounded-2xl p-5'>
                    <p className='text-white font-bold text-center'>Mensagem enviada com sucesso!</p>
                </motion.div>) : null}
            
          </motion.div>
          {/* fim text */}
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col gap-y-4 pb-24 p-4 items-center'
            onSubmit={sendEmail}
            >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all'
              type='text'
              placeholder='Seu nome'
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            >
            </input>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all'
              type='text'
              placeholder='Seu e-mail'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            >
            </input>
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all resize-none mb-12'
              placeholder='Sua mensagem'
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            >
            </textarea>
            <button className='btn btn-lg' type='submit' value="enviar">Enviar mensagem</button>

            <div className='flex flex-col text-[26px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <h4>Ou se preferir entre em contato pelas redes sociais</h4>
              <div className='flex-1 flex justify-center items-center'>
                <a className='pr-5' href='https://www.instagram.com/taciiedla/' target='_blank'>
                  <FaInstagram />
                </a>
                <a className='pr-5' href='https://www.linkedin.com/in/taciara-alves/' target='_blank'>
                  <FaLinkedin />
                </a>
                <a href='https://api.whatsapp.com/send?phone=5581996737814' target='_blank'>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.form>
          {/* fim form */}
        </div>
      <footer className='relative inset-x-0 bottom-0 text-center lg:text-start leading-none p-5'>2023 &copy; Desenvolvido por Taciara.<br/>Alguns direitos reservados.
      </footer>
      </div>
    </section>
  );
};

export default Contact;
