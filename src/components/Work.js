import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// imgs
import Img1 from '../assets/buzzfeed1.png';
import Img2 from '../assets/ecommerce.png';
import Img3 from '../assets/cadastro.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10 '>
            {/* DIV PRIMARIA DE IMG */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* texto */}
            <div>
              <h2 className='h2 leading-tight text-accent'>Meus últimos <br/> 
              Trabalhos
              </h2>
              <p className='max-w-sm mb-14'>
              Aqui estão alguns dos projetos que desenvolvi, nos quais pude aplicar minhas habilidades técnicas e criativas para criar soluções eficientes e de alta qualidade. 
              </p>
              <button className='btn btn-sm'><a href='https://github.com/TaciAlves' target='_blank'>Veja todos os projetos</a></button>
            </div>
            {/* image */}
            <div>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/*overlay*/}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/*img*/}
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1}></img>
                {/*pre titulo*/}
                <div className='absolute -bottom-full left-10 group-hover:bottom-36 transition-all duration-500 z-50'>
                  <button className='btn btn-sm'>BuzzFeed Clone</button>
                </div>
                {/*titulo*/}
                <div className='absolute -bottom-full left-8 group-hover:bottom-4 transition-all duration-700 z-50'>
                <p className='text-sm text-white'>Projeto de clone do BuzzFeed em Angular, nele foi consumido um banco de dados em JSON, toda estilização feita em CSS e Typescript para tipagem global da aplicação.</p>
                  <a className='text-gradient btn-link' href='https://buzz-angular.vercel.app/' target='_blank'>Projeto On-line</a>
                  <a className='text-gradient btn-link p-5' href='https://github.com/TaciAlves/buzzAngular' target='_blank'>Repositório</a>
                </div>
              </div>
            </div>
          </motion.div>
            {/* FIM DIV PRIMARIA DE IMG */}
          {/* DIV SECUNDARIA */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 flex flex-col gap-y-10'>
            {/* IMAGES */}
            <div>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                  {/*overlay*/}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/*img*/}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img2}></img>
                  {/*pre titulo*/}
                  <div className='absolute -bottom-full left-10 group-hover:bottom-36 transition-all duration-500 z-50'>
                  <button className='btn btn-sm'>E-commerce</button>
                </div>
                {/*titulo*/}
                <div className='absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-700 z-50'>
                <p className='text-sm text-white'>Projeto pessoal de um E-commerce responsivo, com toda funcionalidade de adicionar e remover item da sacola, e efetuar compra. Feito com JavaScript puro, e estilização via CSS3.</p>
                  <a className='text-gradient btn-link' href='https://tacialves.github.io/projeto-ecommerce/' target='_blank'>Projeto On-line</a>
                  <a className='text-gradient btn-link p-5' href='https://github.com/TaciAlves/projeto-ecommerce' target='_blank'>Repositório</a>
                </div>
                </div>
              </div>
            {/* FIM IMAGES */}
            {/* IMAGES */}
            <div>
                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                  {/*overlay*/}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/*img*/}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img3}></img>
                  {/*pre titulo*/}
                  <div className='absolute -bottom-full left-10 group-hover:bottom-36 transition-all duration-500 z-50'>
                  <button className='btn btn-sm'>Formulário de Cadastro</button>
                </div>
                {/*titulo*/}
                <div className='absolute -bottom-full left-8 group-hover:bottom-4 transition-all duration-700 z-50'>
                <p className='text-sm text-white'>Projeto de um formulário de cadastro com validação de campos preenchidos, validação de e-mail, validação e verificação de senha forte via JavaScript, estilização via css.</p>
                  <a className='text-gradient btn-link' href='https://tacialves.github.io/pagina-de-cadastro/' target='_blank'>Projeto On-line</a>
                  <a className='text-gradient btn-link p-5' href='https://github.com/TaciAlves/pagina-de-cadastro' target='_blank'>Repositório</a>
                </div>
                </div>
              </div>
            {/* FIM IMAGES */}
           
          </motion.div>
          {/* FIM DA DIV SECUNDARIA */}

        </div>
      </div>
    </section>
  );
};

export default Work;
