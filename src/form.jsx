import React from "react"

class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      nombre: "",
      email: "",
      fecha: new Date()
    }
    // enlazamos el this con el metodo
    this.changeMail = this.changeMail.bind(this)
    this.changeDate = this.changeDate.bind(this)
  }

  // send() {
  //   const forma = document.getElementById('forma');
  //   forma.addEventListener('submit', e => {
  //     alert(e.target)
  //     e.target.preventDefault();
  //     console.log('AQUI')
  //     this.setState({
  //       name: e.target.nombre.value,
  //       email: e.target.email.value
  //     })
  //     document.getElementById('result').innerHTML=this.state.nombre
  //   })
  // }
  
  changeMail (e) {
    
    this.setState({
      email: e.target.value,
    });
    
  }

changeDate() {
  this.setState({
    fecha: new Date()
  })
}

  render() {
    
    return (
      <>
        <div>
    <h1>Formulario {this.props.formName}</h1>
    <h4>Fecha Actual {Math.ceil(this.state.fecha/1000)}</h4>
          <form id="forma" action="">
            <label>
              Nombre
              <input type="text" name="nombre" placeholder="Nombre Completo" onChange={ e => this.setState({
                nombre: e.target.value
              }) } />
            </label>
            <br/>
            <label>
              Email
              <input type="email" name="email" placeholder="Correo Electronico" onChange={this.changeMail} />
            </label>
            <br/>
            <input type="submit" value="Enviar"/>
          </form>
        </div>
        <div>
          <h3>{`Hola ${this.state.nombre}`}</h3>
          <span>{`Correo: ${this.state.email} `}</span>
          <p id="result"></p>      
        </div>
      </>
    );
  }

  // ETAPA DE MONTAJE
  componentDidMount() {
    //console.log(document.getElementById("forma"));
    setInterval(() => {
      this.changeDate()
      console.log(new Date())
    }, 1000);
  }
  
  // ETAPA DE ACTUALIZACION
  componentDidUpdate(prevProps, prevState) {
    // Se puede acceder a los props y el estado que tenia el componente antes de actualizarse, ,mediante las propiedades (prevProps, prevState)
    //console.log('props ', prevProps)
    //console.log('state ', prevState)
    //console.log('-----')
    // PODRIA COMPARAR EL CAMBIO DE ESTADOS EN MI APP

  }

  // ETAPA DE DESMONTAJE

  componentWillUnmount() {
    // Se utiliza para limpiar llamadas asincronas verificaciones e intervalos

  }
}

export default Form;