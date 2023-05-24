import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { postCountry } from "../api/request";
import { Validation } from "../Validation/Schema";

const Add = () => {

    const navigate = useNavigate();
    const [country, setCountry] = useState();
    const handleSubmit = async (values, actions) => {
        await postCountry(values);
        setCountry([...country, values]);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${values.country} posted successfully!`,
            showConfirmButton: false,
            timer: 1500,
        });

        actions.resetForm();

        navigate("/");

    };
    const formik = useFormik({
        initialValues: {
            country: "",
            image: ""
        },
        validationSchema: Validation,
        onSubmit: handleSubmit,
    });
    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <div
                style={{ padding: "10%", display: "flex", justifyContent: "center" }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="enter image url"
                        type="text"
                        name="image"
                        style={{ display: "block", width: "500px", marginBottom: "6%" }}
                    />
                    {formik.errors.image && formik.touched.image && (
                        <span style={{ color: "red" }}>{formik.errors.image}</span>
                    )}
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="enter country"
                        type="text"
                        name="country"
                        style={{ display: "block", width: "500px", marginBottom: "6%" }}
                    />
                    {formik.errors.country && formik.touched.country && (
                        <span style={{ color: "red" }}>{formik.errors.country}</span>
                    )}


                    <Button
                        variant="contained"
                        color="success"
                        style={{ marginTop: "20px" }}
                        disabled={Object.keys(formik.errors).length !== 0 ? true : false}
                        type="submit"
                    >
                        Add
                    </Button>
                </form>
            </div>
        </>
    );
};

export default Add;