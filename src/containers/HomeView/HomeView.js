import React from 'react';
import { Header } from '../../components/Header/Header';
import './HomeView.scss';

/**
 * Pagina que contiene la vista default de la aplicación.
 * Consta del header (el buscador) y el estilo del body. 
 */
export const HomeView = () => {
  return (
    <div className='home-content'>
      <Header />
    </div>
  )
}
