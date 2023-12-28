import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {add} from "../../redux/services/productService";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function AddProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const create = (value) => {
        dispatch(add(value)).then(() => {
            navigate("/products/home")
        })
    }
    return (
        <>
            <center>
            <h1>Add Product</h1>
            <Formik initialValues={
                {
                    title: "",
                    price: "",
                    description: ""
                }
            } onSubmit={create}>
                <Form>
                    <Field name={"title"} placeholder={"Title"} type={'text'}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'title'}/></span><br/>
                    <Field name={"price"} placeholder={"Price"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'price'}/></span><br/>
                    <Field name={"description"} placeholder={"Description"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                    <button type={"submit"} className={"btn btn-primary"}>Add</button>
                </Form>
            </Formik>
            </center>
        </>
    )
}