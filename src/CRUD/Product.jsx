import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
    const [product, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3035/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const del = (id) => {
        fetch(`http://localhost:3035/products/${id}`, {
            method: 'DELETE'
        });
        setProducts(product.filter(p => p.id !== id));

    }
    return (
        <div id='headig-page'>
            <Link to="/add"><button>Add Products</button></Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(p =>

                            <tr key={p.id} >
                                <td> {p.id} </td>
                                <td> {p.title} </td>
                                <td><img src={p.img} alt="" width={360} height={300} />  </td>
                                <td> <button onClick={() => del(p.id)}>Delete</button> </td>
                                <td>  <Link to={`/${p.id}/update`}>  <button >Update</button> </Link></td>
                            </tr>

                        )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product
