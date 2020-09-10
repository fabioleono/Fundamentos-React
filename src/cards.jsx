import React from 'react'
const cards = [
  {
    id: 1,
    title: "Bosque de Dean",
    image: "https://picsum.photos/id/11/200/300",
    category: "Montaña",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/12/300/400",
    category: "Mar",
  },
  {
    id: 3,
    title: "Taganga",
    image: "https://picsum.photos/id/13/100/200",
  },
  {
    id: 4,
    title: "Lima",
    image: "https://picsum.photos/id/14/400/500",
    category: "mar",
  },
  {
    id: 5,
    title: "Neon",
    category: "Aire",
  },
];

const Cards = ({ match }) => {
  const selCard = cards.filter(elem => elem.id===parseInt(match.params.id))[0]
  return (
    <>
      {/* Valido si el id filtrado en selCard existe */}
      { selCard ? (
        <div>
          <h1>Titulo {selCard.title} </h1>
          <h2>Categoria {selCard.category} </h2>
          <img src={selCard.image} alt={selCard.title} />
        </div>
      ) : (
        <div>
          <h1>Curso Inexistente</h1>
        </div>
      )
      }
    </>
  );
}

export default Cards;