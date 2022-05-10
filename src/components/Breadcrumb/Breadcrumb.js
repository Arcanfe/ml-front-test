import React from 'react';
import './Breadcrumb.scss';

/**
 * Componente que muestra la miga de pan en las vistas.
 * @param {Array<String>} props Compuesto por un array de strings que serán los textos a mostrar. 
 */
export const Breadcrumb = ({path}) => {

  /**
   * Función que concatena el array que se recibe en el formato esperado: string concatenado.
   */
  const buildBreadcrumb = () => {
    return path.reduce((prevValue, currentValue) => {
      return prevValue + ' > ' + currentValue;
    })
  }

  return (
    <div className='breadcrumb'>
      { buildBreadcrumb() }
    </div>
  )
}
