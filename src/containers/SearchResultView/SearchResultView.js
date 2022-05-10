import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Divider } from '../../components/Divider/Divider';
import { Header } from '../../components/Header/Header';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import './SearchResultView.scss';

/**
 * Pagina que contiene la vista de los resultados de una busqueda
 * Compuesto por el header, las tarjetas de presentacion del producto, y un divider que funcionara como separación entre tarjetas.
 */
export const SearchResultView = () => {
  /**
   * Variable que recibe los parametros de la url
   */
  const params = useParams();
  /**
   * Variable que almacenará los resultados de la busqueda
   */
  const [itemsResult, setItemsResult] = useState();

  /**
   * Función que se ejecuta al inicializar el componente.
   * Realiza el llamado de la función con la que obtendrá los datos a mostrar.
   */
  useEffect(() => {
    fetch(`/api/items/q/${params.item}`).then(response => response.json())
    .then(data => 
      setItemsResult(data)
    );
  }, [params.item]);

  return (
    <>
      <Header />
      <div className='search-result-content'>
        <Breadcrumb path={['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 Gb']}/>
        {
          itemsResult && itemsResult.map(item => {
            return <>
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.title}
                price={item.price.amount}
                image={item.picture}
                location={item.location}
                shipping={item.free_shipping}
              />
              <Divider />
            </>
          })
        }
      </div>
    </>
  )
}
