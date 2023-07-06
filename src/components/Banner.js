import React from 'react';
import Image from '../assets/avatar1.svg';
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* texto inicial */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('right', 0.4)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              TACIARA <span>EDLA</span>
            </motion.h1>
          <motion.div 
            variants={fadeIn('right', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='mt-2 mb-6 text-[34px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Muito prazer, eu sou uma</span>
            <TypeAnimation sequence={[
              'Desenvolvedora Front-End',
              2000,
              'Desenvolvedora Web',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
            variants={fadeIn('right', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Transformando ideias em experiências digitais incríveis e desbloqueando o potencial máximo do desenvolvimento front-end.
          </motion.p>
          <motion.div 
            variants={fadeIn('right', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href='https://github.com/TaciAlves' target='_blank' className='text-gradient btn-link text-[20px]'>Meu Portfólio</a>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='flex text-[26px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/TaciAlves' target='_blank'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/taciara-alves/' target='_blank'>
              <FaLinkedin />
            </a>
          </motion.div>
          </div>
          {/* fim do texto inicial */}
          {/* imagem do banner */}
          <motion.div 
            variants={fadeIn('left', 0.9)} 
            initial="hidden" 
            whileInView={'show'} 
           
            className=' lg:flex flex-1 max-w-[300px] lg:max-w-[482px] mx-auto'>
            <img src={Image}></img>
          </motion.div>
          {/* fim da imagem do banner */}

        </div>
      </div>
    </section>
  );
};

export default Banner;
