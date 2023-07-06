import React from 'react';
// import Logo from '../assets/logo.svg';

const Header = () => {
  return (
      <header className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <a href='#' className='font-bold text-gradient text-bold text-[26px]'>
              Taciara <br/>
              Edla 
            </a>

            <button className='btn btn-sm'>Vamos trabalhar juntos</button>
          </div>
        </div>
      </header>
    );
};

export default Header;
