import React from 'react'
import Cards from './Cards'

const CategoriasList = ({ categoria }) => {
    return (
        <div>
            <h1>CategoriasList</h1>
            {
                categoria.map((cate, index) => (
                    <Cards key={index} categoria={cate}/>
                ))
            }
            
        </div>
    )
}

export default CategoriasList