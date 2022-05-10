import React from 'react';
import './ItemDetail.scss'

/**
 * Componente que muestra el detalle del producto.
 * El detalle del producto es una sección donde muestra a profundidad información del producto buscado.
 * @param {Object} props Objeto con la información del item: nuevoItem (string), numeroVendido (number), nombre (string), valorNumero (number), valorDecimal (string), descripcion (string), imagen (string)
 */
export const ItemDetail = ({newItem, numberSold = 0, name, numberValue, floatValue, desc, image}) => {
  return (
    <div className='item-detail-container' >
      <div className='item-detail-main-section'>
        <img className='item-detail-image' src={ image } alt='item' />
        <div className='item-detail-buy-section' >
          <div className='item-detail-new' >
            { newItem === 'new' && 'Nuevo - ' }{ numberSold } vendidos
          </div>
          <div className='item-detail-title' >
            { name }
          </div>
          <div className='item-detail-value' >
            $ { numberValue }<sup className='item-detail-value-dec'>{ floatValue }</sup>
          </div>
          <button className='item-detail-buy-button' >Comprar</button>
        </div>
      </div>
      <div className='item-detail-description-section' >
        <div className='item-detail-decription-title' >
          Descripción del producto
        </div>
        <div className='item-detail-decription-text' >
          { desc }
        </div>
      </div>
    </div>
  )
}
