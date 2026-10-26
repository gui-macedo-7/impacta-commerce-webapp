import Head from "next/head"
import menu from "../../components/Menu"
import ProductsForSaleList from "../../components/ProductsForSaleList"
import Layout from "../../components/Layout"

const products = [
    {
        code: "8C9F552D-D22C-4B76-AAF6-233F806F6484",
        title: "Caneca Personalizada de Porcelana",
        amount: 123.45,
        installments: { number: 3, total: 41.15, hasFee: true},
    },
    {
        code: "ED1F26D1-81B2-424E-A79F-DA74E9DDBAB7",
        title: "Caneca de Tulipa",
        amount: 123.45,
        installments: { number: 3, total: 41.15},
    },
]

function ProductsForSalaPage() {
    return (
        <Layout>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Impacta Commerce</h1>
                    {/* <p className="col-md-8 fs-4">
                     */}
                </div>
            </div>
        </Layout>
    )
}