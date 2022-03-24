import React, { useEffect, useRef, useState } from 'react'


const CategoriaAdd = ({setCategorias}) => {

    const [search, setSearch] = useState('') //useState donde desea que se guarde la informacion
    //crea el hook de referencia
    const searchref = useRef()

    //actualizar el evento onSubmit limpiando la busqueda
    const handleSubmit =(e) => { 
        e.preventDefault()
        setCategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    const handleInputChange = (e) => { //actualizar el target
        setSearch(e.target.value)
    }

    useEffect(()  => {
        searchref.current.focus()
    }, [])

    
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input
                ref={searchref}
                name="search" 
                placeholder="categorias"
                value={search}
                onChange={handleInputChange}
            />
        </form>
    </>
  )
}
export default CategoriaAdd