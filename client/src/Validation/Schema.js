import * as yup from "yup";

export const Validation = yup.object().shape({

    country: yup
        .string()
        .required("country is required"),

    image: yup
        .string()
        .required("image is required"),
});