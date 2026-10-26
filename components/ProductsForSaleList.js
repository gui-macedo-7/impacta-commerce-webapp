import {useEffect, useState} from 'react'
import Link from 'next/link'

function Installment(props) {
    const fees = props.installment.hasFee ? "com juros" : "sem juros"

    return (
        <p>
            em {props.installment.number}x de R$ {props.installment.total} {fees}
        </p>
    )
}

function ProductListItem(props) {
    const defaultProductImage = "https://via.placeholder.com/150"

    return (
        <div className="d-flex position-relative border my-2">
            <img src={defaultProductImage} className="flex-shrink-0 me-3" />
            <div>
                <Link href={`/products/${props.product.code}`}>
                    <a className="stretched-link">
                        <h3 className="mt-0">{props.product.title}</h3>
                    </a>
                </Link>
                <h4>R$ {props.product.amount}</h4>
                <Installment installment={props.product.installment} />
            </div>
        </div>
    )
}

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