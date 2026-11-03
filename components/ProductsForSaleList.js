import {useEffect, useState} from 'react'
import Link from 'next/link'

function ProductsForSaleList() {
    const json_products = [
        {
            title: "Caneca Personalizade de Porcelana",
            amount: 123.45,
            installments: { number: 3, total: 41.15},
        },
        {
            title: "Caneca de Tulipa",
            amount: 123.45,
            installments: { number: 3, total: 41.15, hasFee: true},
        },
    ]


    const products = json_products.map((x, index) => ( 
        <ProductListItem product={x} key={index} />
    ))

    return <div className={styles.container}>{products}</div>

}

export default ProductsForSaleList