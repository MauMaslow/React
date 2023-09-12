import "./Buttom.css"

const Buttom = (props) => {

    const {type} = props

    return <button className="buttom"  onClick={props.onClick}  type={type}> {props.children}</button>
}

export default Buttom