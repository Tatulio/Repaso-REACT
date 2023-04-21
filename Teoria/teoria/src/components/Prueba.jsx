import { useState } from "react"

export function Prueba(){
    const [likes, setLikes] = useState(0)

    const darLike = () =>{
        setLikes(likes + 1)
    }

    const quitarLike = () =>{
        setLikes(likes - 1)
    }

    return (<div>
        <h1>Likes {likes}</h1>
        <button onClick={darLike}>Dar Like</button>
        <button onClick={quitarLike}>Quitar Likes</button>
    </div>)

}