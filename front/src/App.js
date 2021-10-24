import React, { useEffect, useState } from 'react';
import { Header } from './componentes/header/Header';
import { Productos } from './componentes/productos/Productos';
import 'boxicons';

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
    <div className="App">
      <Header />
      <Productos />


      {/* <h1> Prueba tecnica front Ecomsur 2021</h1>
      <p>Voy a comenzar</p> */}
      {/* Check to see if express server is running correctly */}
      {/* <h5>{response}</h5> */}
    </div>
  )
}

export default App
