export function Coffe() {
    //const caliente = true;
    /*if(caliente === true) {
        return (<h1>Cafe Caliente</h1>)
    } else {
        return (<h1>Cafe Frio</h1>) 
    }*/
    //return (<h1>{caliente?"Cafe Caliente":"Cafe Frio"}</h1>)

    const datos = {
        nombre: "Mike",
        edad: 20
    }
    return (<div>
        <h1>{datos.nombre}</h1>
        <h1>{datos.edad}</h1>
    </div>)
} 