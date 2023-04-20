import "./card.css"
const pokemon = [
    {
        id : 1,
        nombre: "Pikachu",
        image: "https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png"
    },
    {
        id : 2,
        nombre: "Charizard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpUrveAd5EBFoBbm9rVIloUZtklNvzVhSmwDGscBT&s"
    }
]
export function Card() {
    return (
        pokemon.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <h1>{item.nombre}</h1>
                    <img className="image" src="item.image" />
                </div>
            )
        })
    )
}