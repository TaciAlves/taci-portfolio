import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import pdfFile from '../assets/Taciara-DEV.pdf';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const download = () => {
    window.open(pdfFile, '_blank');
  }

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* fim da img */}

          {/* texto */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>Quem sou eu?</h2>
            <h3 className='h3 mb-4'>Sou uma Desenvolvedora Front-End.
            </h3>
            <p className='mb-6'>Como front-end tenho habilidades para criar aplicações web funcionais, responsivas e interativas, proporcionando ao usuário uma experiência única. Apaixonada por tecnologia, por elaborar novas ideias e criar soluções para problemas reais.
            </p>
          {/* status */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={2} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de <br/>
                  Experiência
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={20} duration={3}/> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projetos <br/>
                  Feitos
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={6} duration={3}/> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Tecnologias em <br/>
                  Constante
                  Aprendizado
                </div>
              </div>
            </div>
          {/* fim do status */}
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg' onClick={download}>Veja meu Currículo</button>
            <a href='https://github.com/TaciAlves' className='text-gradient btn-link'>
              Meu Portfólio
            </a>
          </div>
          </motion.div>
          {/* fim do texto */}

        </div>
      </div>
    </section>
  );
};

export default About;
