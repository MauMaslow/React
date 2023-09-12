import './Tabla.css';
import Tr from '../Tr';

const Table = (props) => {
  const filasdeVideos = props.filasdeVideos || []; // Si props.filasdeVideos es nulo o indefinido, asignamos un arreglo vacío
  const eliminarFila = props.eliminarFila


  return <>
    <div className="tabla_contenedor">
      <table className="categori_table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
        </thead>   


          {Array.isArray(filasdeVideos) && filasdeVideos.map((fila) => (
            <Tr
              datos={fila}
              key={fila.id}
              eliminarFila={eliminarFila}
            />
          ))}
        
      </table>
    </div>
    </>
};

export default Table;