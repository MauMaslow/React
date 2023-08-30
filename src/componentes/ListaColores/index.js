import "./ListaColores.css"

const ListaColores = (props) => {

const manejarCambio = (e) => {
props.actualizarColor(e.target.value)
}

return (
    <div className="lista_colores">
        <label>{props.titulo}</label>
        <select className="color_select" value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciona un color</option>
            {props.colores.map( (color,index) => 
            <option key={index} value={color}>{color}</option>
            )}
        </select>
    </div>
);
}

export default ListaColores