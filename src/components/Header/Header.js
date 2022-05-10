import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mlLogo from '../../assets/ml_logo.png';
import mlSearch from '../../assets/ml_search.png';
import './Header.scss';

/**
 * Componente que muestra el header de la aplicación
 * El header consiste en el encabezado, el logo de la app, y un buscador de lo que el usuario considere.
 */
export const Header = () => {
  /**
   * Variable que almacena lo escrito por el usuario
   */
  const [textInput, setTextInput] = useState('');
  /**
   * Variable que permite navegar entre vistas
   */
  const navigate = useNavigate(); 

  /**
   * Función que guardara los caracteres que escriba el usuario en la variable textInput
   */
  const handleText = (e) => {
    setTextInput(e.target.value);
  }

  /**
   * Función que navegará a la vista de resultados de la búsqueda, con el string ingresado como parámetro en la url.
   */
  const searchText = () => {
    setTextInput('')
    textInput !== '' ? navigate(`/items/search=${textInput}`) : navigate('/');
  }

  return (
    <div className='header-ml'>
      <a href='/'><img className='header-ml-icon' src={ mlLogo } alt='Mercado Libre' width='50' /></a>
      <input className='header-ml-input' placeholder='Nunca dejes de buscar' onChange={ handleText } />
      <button className='header-ml-button' onClick={ searchText }><img src={ mlSearch } alt='Search' width='20' /></button>
    </div>
  )
}
