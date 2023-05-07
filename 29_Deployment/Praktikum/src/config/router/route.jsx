import React from "react";
import LandingPage from "../../pages/LandingPage/LandingPage";
import Signup from "../../pages/Auth/Signup/Signup";
import Signin from "../../pages/Auth/Signin/Signin";
import CreateProduct from "../../pages/CreateProduct/CreateProduct";
import DetailProduct from "../../pages/DetailProduct/DetailProduct";
import EditProduct from "../../pages/EditProduct/EditProduct";

export const routing = [
    {
        path: "/",
        element: <LandingPage/>,
        isPrivate: false,
    },
    {
        path: "/CreateProduct",
        element: <CreateProduct/>,
        isPrivate: true,
    },
    {
        path: "/DetailProduct/:id",
        element: <DetailProduct/>,
        isPrivate: true,
    },
    {
        path: "/EditProduct/:id",
        element: <EditProduct/>,
        isPrivate: true,
    },
    {
        path: "/Signup",
        element: <Signup/>,
        isPrivate: false,
    },
    {
        path: "/Signin",
        element: <Signin/>,
        isPrivate: false,
    },
];