import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Header } from '../../components/Header/Header';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import './ItemResultView.scss';

/**
 * Pagina que contiene la vista de la descripcion de un item en especifico
 * Compuesto por el header y el componente que contendrá la información del producto.
 */
export const ItemResultView = () => {
  /**
   * Variable que recibe los parametros de la url
   */
  const params = useParams();
  /**
   * Variable que almacena las caracteristicas del item
   */
  const [item, setItem] = useState();

  /**
   * Función que se ejecuta al inicializar el componente.
   * Realiza el llamado de la función con la que obtendrá los datos para llenar item
   */
  useEffect(() => {
    fetch(`/api/items/${params.id}`).then(response => response.json())
    .then(data => 
      setItem(data)
    )
  }, [params.id]);

  /**
   * Funcion que ajusta la presentación del valor decimal del producto
   * En caso de tener un unico digito, añade un 0 para completar el formato '00'
   */
  const handleDecimals = () => {
    return item.price.decimals.toString().length === 1 ? ('0' + item.price.decimals) : item.price.decimals
  }

  return (
    <>
      <Header />
      <div className='item-result-content'>
        <Breadcrumb path={['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 Gb']}/>
        {item && <ItemDetail
          newItem={item.condition}
          numberSold={item.sold_quantity}
          name={item.title}
          numberValue={item.price.amount}
          floatValue={handleDecimals()}
          desc={item.description}
          image={item.picture}
        />}
      </div>
    </>
  )
}
