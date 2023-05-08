import { useState } from "react";

const ComponentChild6 = ({ estado, actualizar }) => (
  <div id="six">Componente 6 - 
    <b>Valor del estado: {estado}</b><button onClick={() => actualizar(prev => prev + 1)}>Actualizar</button>
  </div>
);

const ComponentChild5 = ({ estado, actualizar }) => (
  <div id="five">Componente 5 - 
    <b>Valor del estado: {estado}</b><ComponentChild6 estado={estado} actualizar={actualizar} />
  </div>
);

const ComponentChild4 = ({ estado, actualizar }) => (
  <div id="four">Componente 4 - 
    <b>Valor del estado: {estado}</b><ComponentChild5 estado={estado} actualizar={actualizar} />
  </div>
);

const ComponentChild3 = ({ estado, actualizar }) => (
  <div id="three">Componente 3 - 
    <b>Valor del estado: {estado}</b><ComponentChild4 estado={estado} actualizar={actualizar} />
  </div>
);

const ComponentChild2 = ({ estado, actualizar }) => (
  <div id="two">Componente 2 - 
    <b>Valor del estado: {estado}</b><ComponentChild3 estado={estado} actualizar={actualizar} />
  </div>
);

const ComponentChild1 = ({ estado, actualizar }) => (
  <div id="one">Componente 1 - 
    <b>Valor del estado: {estado}</b><ComponentChild2 estado={estado} actualizar={actualizar} />
  </div>
);

export const MainComponent = () => {
  const [piezaEstado, setPiezaEstado] = useState(1);

  return (
    <div id="propsdrilling"><h1>Prop drilling</h1><span>Main Component</span>
      <ComponentChild1 estado={piezaEstado} actualizar={setPiezaEstado} />
    </div>
  );
};
