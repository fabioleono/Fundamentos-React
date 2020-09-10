import React from 'react'

const getDate = () => {
  const date = new Date()
  return Math.ceil(date/1000)
}

const Banner = () => (
  <>
    <div className="bordeDiv">
      <h1>Fundamentos React</h1>
      <h2>Aprendizaje EDteam</h2>
<h3>Hoy es {getDate()}</h3>
    </div>
  </>
)

export default Banner;