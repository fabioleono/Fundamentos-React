import React from 'react'
import Card from './card'

const cards = [
  {
    id: 1,
    title: "Bosque de Dean",
    image: "https://picsum.photos/id/11/200/300",
    category: "Montaña"
  },
  {
    id: 2,
    image: "https://picsum.photos/id/12/300/400",
    category: "Mar"
  },
  {
    id: 3,
    title: "Taganga",
    image: "https://picsum.photos/id/13/100/200"
  },
  {
    id: 4,
    title: "Lima",
    image: "https://picsum.photos/id/14/400/500",
    category: "mar"
  },
  {
    id: 5,
    title: "Neon",
    category: "Aire"
  }
];

const GridCard = () => (
  <>
    <article>
      {cards.map((elem) => (
        <Card
          key={elem.id}
          id={elem.id}
          title={elem.title}
          image={elem.image}
          category={elem.category}
        />
      ))}

      {/* <Card
        id={1}
        title="Bosque de Dean"
        image="https://picsum.photos/id/11/200/300"
        category="Montaña"
      />
      <Card
        id={2}
        
        image="https://picsum.photos/id/12/300/400"
        category="Mar"
      />
      <Card
        id={3}
        title="Taganga"
        image="https://picsum.photos/id/13/100/200"
        
      />
      <Card
        id={4}
        title="Lima"
        image="https://picsum.photos/id/14/400/500"
        category="mar"
      />
      <Card
        id={5}
        title="Neon"
        category="Aire"
      /> */}
    </article>
  </>
)

export default GridCard;