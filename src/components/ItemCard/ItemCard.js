import React from 'react';
import { useNavigate } from 'react-router-dom';
import mlShipping from '../../assets/ml_shipping.png';
import './ItemCard.scss';

/**
 * Componente que muestra la tarjeta de los items.
 * Una tarjeta es un pequeño campo donde se mostrará cierta información del item
 * @param {Object} props Compuesto por información preliminar del item: Id (string), nombre (string), precio (number), imagen (string), ubicacion (string), envio (boolean)
 */
export const ItemCard = ({id, name, price, image, location, shipping}) => {
  /**
   * Variable que permite navegar entre vistas
   */
  const navigate = useNavigate(); 

  /**
   * Función que redireccionará a la vista de detalle del producto
   */
  const itemRedirect = () => {
    navigate(`/items/${id}`)
  }

  return (
    <div className='item-card-container' onClick={itemRedirect}>
      <img className='item-card-image' src={image} alt='item' />
      <div className='item-card-desc'>
        <div className='item-card-price'>
          <div className='item-card-value'>$ {price}</div>
          {shipping && <img className='item-card-shipping-icon' src={ mlShipping } alt='shipping-available' />}
        </div>
        <div className='item-card-name'>{name}</div>
      </div>
      <div className='item-card-location'>{location}</div>
    </div>
  )
}
