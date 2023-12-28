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
            <h1>ListProduct</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>

                {products.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`/products/detail/${item.id}`}>
                                {item.title}
                            </Link>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                            <Link to={`/products/edit/${item.id}`}>
                                <button>Edit</button>
                            </Link>

                        </td>
                        <td>
                            <button onClick={() => removeProduct(item.id)}> Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}