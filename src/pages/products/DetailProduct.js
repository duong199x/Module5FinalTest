import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductById} from "../../redux/services/productService";

export default function DetailProduct() {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductById(id))
    }, []);
    const product = useSelector(({products}) => {
        return products.product
    })
    return (
        <>
            <center>
                <h1>Detail Product {id}</h1>
                <p>Tên sản phẩm: {product.title}</p>
                <p>Mô tả: {product.description}</p>
                <p>Giá: {product.price} VND</p>
                <Link to={"/products/home"}>
                    <button className={"btn btn-primary"}>Trở lại</button>
                </Link>
            </center>
        </>
    )
}