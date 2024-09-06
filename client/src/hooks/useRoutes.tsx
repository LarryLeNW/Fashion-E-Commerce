import Products from "components/Products/Products";
import paths from "constant/paths";
import Public from "layout/public";
import Blogs from "pages/public/Blogs";
import ConfirmRegister from "pages/public/ConfirmRegister";
import DetailBlog from "pages/public/DetailBlog";
import DetailProduct from "pages/public/DetailProduct";
import FAQ from "pages/public/FAQ";
import Home from "pages/public/Home";
import Introduce from "pages/public/Introduce";
import Login from "pages/public/Login";
import OutService from "pages/public/OutService";
import { useRoutes } from "react-router-dom";

function useRouter() {
    const element = useRoutes([
        {
            path: "/",
            element: <Public />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: paths.LOGIN,
                    element: <Login />,
                },
                {
                    path: paths.CONFIRM_REGISTER,
                    element: <ConfirmRegister />,
                },
                {
                    path: paths.INTRODUCE,
                    element: <Introduce />,
                },
                {
                    path: paths.BLOGS,
                    element: <Blogs />,
                },
                {
                    path: paths.DETAIL_BLOG,
                    element: <DetailBlog />,
                },
                {
                    path: paths.FAQ,
                    element: <FAQ />,
                },
                {
                    path: paths.OUR_SERVICES,
                    element: <OutService />,
                },
                {
                    path: paths.PRODUCTS,
                    element: <Products />,
                },
                {
                    path: paths.DETAIL_PRODUCT,
                    element: <DetailProduct />,
                },
            ],
        },
    ]);

    return element;
}

export default useRouter;
