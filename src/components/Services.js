import React from 'react';
import {BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import JS from '../assets/js.png';
import PHP from '../assets/php.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import REACT from '../assets/react.png';
import TYPESCRIPT from '../assets/typescript.png';
import NODE from '../assets/nodejs.png';
import TAILWIND from '../assets/tailwind.png';
import ANGULAR from '../assets/angular.png';


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text e img*/}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Tecnologias</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Essas são algumas tecnologias que faço uso em meus projetos, onde venho estudando e me aprimorando.
            </h3>
            {/* <button className='btn btn-sm'>Veja meu trabalho</button> */}
          </motion.div>
          {/*services*/}
          <div className='flex-1'>
          {/*services list*/}
            <motion.div 
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className='max-w-[290px] grid grid-cols-2 gap-x-6 gap-y-6 md:max-w-[380px] md:grid md:grid-cols-3 lg:max-w-[482px] lg:grid lg:grid-cols-3 items-center mx-auto'>
              {/* {services.map((service, index) => {
                const {name, description, link} = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div>links</div>
                  </div>
                )
              })} */}
              <img className='' src={JS}></img>
              <img src={REACT}></img>
              <img src={ANGULAR}></img>
              <img src={PHP}></img>
              <img src={NODE}></img>
              <img src={HTML}></img>
              <img className='max-h-[140px]' src={CSS}></img>
              <img src={TAILWIND}></img>
              <img src={TYPESCRIPT}></img>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
