import "./Banner.css"

const Banner = () => {
return <section className="banner">
<div className="contenido">

    <div className="informacion">
        <h1>Front End</h1>    
        <span>Challenge React</span>
        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</p>
    </div>        

    <div className="video">
    <iframe src="https://www.youtube.com/embed/uuwfgXD8qV8"></iframe>
    </div>    

</div>

</section>
}

export default Banner

