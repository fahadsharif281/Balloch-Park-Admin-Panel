import React from "react";
import classes from "./ForgetPassword.module.scss";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/reducers/userReducer";
import { Input } from "../../../components/common/Input/Input";
import { useState } from "react";
import * as Yup from "yup";
import CustomButton from "../../../components/common/Button/Button";

const ForgetPassword = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      const user = {
        email: values.email,
      };

      dispatch(setUser(user));
      navigate("/home");
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
  });
  return (
    <>
      <div className={classes.container}>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center ">
            <Col md={8} lg={5} xs={12}>
              <div className={classes.body}>
                {" "}
                <Card className="shadow rounded-3">
                  <Card.Body className={classes.cardbody}>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="mb-0">Forget Password</h3>
                        <p className=" small mb-0">
                          <NavLink to="/">Back</NavLink>
                        </p>
                      </div>
                      <div>
                        <Form onSubmit={() => formik.handleSubmit()}>
                          <Input
                            type="email"
                            label="Enter Email Address for OTP Verification"
                            placeholder="Enter email address"
                            error={
                              formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : ""
                            }
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                          />
                          <div className="d-grid">
                            <CustomButton text="Submit" />
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ForgetPassword;
