export function Usuarios(props) {
    console.log(props)
    return (<div>
        <h1>Nombre: {props.nombre}</h1>
        <h1>Edad: {props.edad}</h1>
        <h1>{props.direccion.calle}, {props.direccion.ciudad}, {props.direccion.pais}</h1>
    </div>)
}
