import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Typography,
  TextField,
  FormControl,
  Button,
  FormHelperText,
} from "@mui/material";

const FormikForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required.")
            .trim()
            .max(55, "Name must be at max 55 characters.")
            .min(3, "Name must be at least 3 characters."),

          email: Yup.string()
            .email("Must be valid email.")
            .max(50, "Email must be at max 50 characters.")
            .trim()
            .lowercase()
            .required("Email is required."),

          password: Yup.string()
            .required("Password is required.")
            .trim()
            .max(21, "Password must be at max 21 characters."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                gap: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h3">Register</Typography>
              <FormControl>
                <TextField label="Name" {...formik.getFieldProps("name")} />
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" color="secondary" variant="contained">
                Register
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
