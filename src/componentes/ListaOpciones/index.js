import "./ListaOpciones.css"

const ListaOpciones = (props) => {

const cambioDeCategoria = (e) => {
props.actualizarselectCategoria(e.target.value)
}


return (
        <div className="video_lista">
            <label>{props.titulo}</label>
            <select className="video_select" value={props.valor} onChange={cambioDeCategoria}>
            <option value="" disabled defaultValue="" hidden>Selecciona una categoría</option>
                { props.categorias.map( (categoria, index) => 
                    <option key={index} value={categoria}>{categoria}</option>
                )}
            </select>
        </div>
    );
}

export default ListaOpciones