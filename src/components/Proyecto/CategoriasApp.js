import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import CategoriasList from './CategoriasList'
import CategoriaAdd from './CategoriaAdd'

const CategoriasApp = () => {

    const [categorias, setCategorias] = useState(["Funny", "Heroes", "Accion", "Historico"])

    const handleAdd = () => {
        setCategorias([
            ...categorias,
            "Comedia"	
        ])
    }
    
    return (
        <div>
            <h1>Componentes con hooks</h1>
            <ol>
                <CategoriaAdd setCategorias={setCategorias}/> 
                <CategoriasList 
                categoria={categorias}/>
            </ol>
            <Button variant="warning" onClick={handleAdd}>Agregar</Button>
        </div>
    )
}

export default CategoriasApp