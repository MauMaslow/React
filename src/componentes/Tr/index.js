import './Tr.css'

const Tr = (props) => {
const {nombre, descripcion, id} = props.datos
const eliminarFila = props.eliminarFila


return <>
    <tr>
        <td>{nombre}</td>
        <td>{descripcion}</td>
        <td className="editar">Editar</td>
        <td className="remover">
        <buttom  onClick={() => eliminarFila(id)} >
            Remover
        </buttom>
        </td>
    </tr>

</>
}

export default Tr