import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {edit, getProductById} from "../../redux/services/productService";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditProduct() {
    const {id} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const product = useSelector(({products}) => {
        return products.product
    })
    const editProduct = (value) => {
        dispatch(edit(value)).then(() =>
            navigate("/products/home")
        )
    }
    useEffect(() => {
        dispatch(getProductById(id))
    }, []);
    return (
        <>
        <center>
            <h1>Edit Product {id}</h1>
            <Formik initialValues={
                product
            } enableReinitialize={true} onSubmit={editProduct}>
                <Form>
                    <Field name={"title"} placeholder={"Title"} type={'text'}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'title'}/></span><br/>
                    <Field name={"price"} placeholder={"Price"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'price'}/></span><br/>
                    <Field name={"description"} placeholder={"Description"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                    <button type={"submit"} className={"btn btn-primary"}>Edit</button>
                </Form>
            </Formik>
        </center>
        </>
    )
}