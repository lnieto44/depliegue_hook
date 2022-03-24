import React, { useEffect, useState } from 'react'

const Cards = ({ categoria }) => {

    const [imagenes, setImagenes] = useState([]);

    //enviamos informacion de las categorias a la funcion imgGif
    useEffect(() => {
        imgGif(categoria) //recibe por parametro la informacion categoria
        .then(
            imgData => setImagenes(imgData))
    }, [categoria]);

    const imgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=P2j4HbbdHi52WWOVwUF0eEXZhkr0w4Gl`//url que sea dinamica
        const resp = await fetch(url)
        const { data } = await resp.json()

        const imgData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })
        return imgData;
    }

    imgGif();
    return (
        <div>
            <ol>
                {
                imagenes.map(img => (
                    <li key={img.id}>
                        <h3>{img.title}</h3>
                        <img src={img.url} alt=""></img>
                    </li>
                ))
                }
            </ol>
        </div>
    )
}

export default Cards

//api pokemon https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=3OM2hRB8riWEoj7G4aoXZ4SjpaoYnVgv
//api2 pokemon https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=P2j4HbbdHi52WWOVwUF0eEXZhkr0w4Gl