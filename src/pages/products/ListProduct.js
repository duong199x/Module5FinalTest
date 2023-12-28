import {useDispatch, useSelector} from "react-redux";
import {getAll, remove} from "../../redux/services/productService";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export function ListProduct() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list
    })
    useEffect(() => {
        dispatch(getAll())
    }, []);
    const removeProduct = (id) => {
        let result = confirm("Want to delete?");
        if (result) {
            dispatch(remove(id)).then(() => {
                dispatch(getAll())
            })
        }
    }
    return (
        <>
            <center>
                <h1>List Product</h1>
            </center>
            <table className={"table"}>
                <thead>
                <tr>
                    <th scope={"col"}>Id</th>
                    <th scope={"col"}>Title</th>
                    <th scope={"col"}>Price</th>
                    <th scope={"col"}>Description</th>
                    <th colSpan={2} scope={"col"}>Action</th>
                </tr>
                </thead>
                <tbody>

                {products.map((item) => (
                    <tr key={item.id}>
                        <td scope={"row"}>{item.id}</td>
                        <td>
                            <Link to={`/products/detail/${item.id}`}>
                                {item.title}
                            </Link>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                            <Link to={`/products/edit/${item.id}`}>
                                <button className={"btn btn-primary"}>Edit</button>
                            </Link>

                        </td>
                        <td>
                            <button onClick={() => removeProduct(item.id)} className={"btn btn-danger"}> Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}