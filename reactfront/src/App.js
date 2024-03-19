import './App.css';

import CompShowEmpleados from './components/Empleados/ShowEmpleados';
import CompCreateEmpleado from './components/Empleados/CreateEmpleados';
import CompEditEmpleado from './components/Empleados/EditEmpleados';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShowSolicitudes from './components/Solicitudes/ShowSolicitudes';
import CompCreateSolicitudes from './components/Solicitudes/CreateSolicitud';

import { Home } from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='App-logo '>KONECTA</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/empleados' element={ <CompShowEmpleados />} />
        <Route path='/empleados/create' element={ <CompCreateEmpleado />} />
        <Route path='/empleados/edit/:id' element={ <CompEditEmpleado />} />
        <Route path='/solicitudes' element={ <CompShowSolicitudes />} />
        <Route path='/solicitudes/create' element={ <CompCreateSolicitudes />} />
      </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
