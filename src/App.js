
import {Home} from "./pages/Home";
import {ListProduct} from "./pages/products/ListProduct";
import {AddProduct} from "./pages/products/AddProduct";
import {EditProduct} from "./pages/products/EditProduct";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./pages/products/DetailProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path={'products'} element={<Home/>}>
                    <Route path={"home"} element={<ListProduct/>}></Route>
                    <Route path={"add"} element={<AddProduct/>}></Route>
                    <Route path={"detail/:id"} element={<DetailProduct/>}></Route>
                    <Route path={"edit/:id"} element={<EditProduct/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
