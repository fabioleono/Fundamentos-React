import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// const Card = ({ id, title, image, category }) => (
//   <div id={id}>
//     <h1>{title}</h1>
//     {
//       // valido si existe la propiedad category con un operador ternario
//       category ? <p>{category}</p> : <p>Sin categoria</p>
//     }
//      {/* Hago una validacion dentro del elemento con la propiedad image  */}
//     <img
//       src={image ? image : "https://picsum.photos/id/0/200/200"}
//       alt={title ? title : "Sin Titulo"}
//     />
//   </div>
// );

 // !!--- CON prop-types
const Card = ({ id, title, image, category }) => (
  <div>
    <h1>{title}</h1>

    <p>{category}</p>
    <Link to={`/Cards/${id}`}>
      <img src={image} alt={title} />
    </Link>
  </div>
);
// definimos que tipo de dato esperamos que nos llegue de cada propiedad

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string
};
// Definimos los valores por defecto 

Card.defaultProps = {
  title: 'No hay Titulo',
  category: 'no hay categoria',
  image: 'https://picsum.photos/id/0/200/200'
};


// ---!!
export default Card;