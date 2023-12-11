import classes from "./Login.module.scss";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/reducers/userReducer";
import { Input } from "../../../components/common/Input/Input";
import { useState } from "react";
import * as Yup from "yup";
import view from "../../../assets/png/view.png";
import hide from "../../../assets/png/hide.png";

const Login = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };

      dispatch(setUser(user));
      navigate("/home");
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(8).required("Required!"),
    }),
  });
  return (
    <>
      <div className={classes.container}>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={5} xs={12}>
              <Card className="shadow">
                <Card.Body className={classes.cardbody}>
                  <div className="mb-3 mt-4 ">
                    <h3 className="d-flex justify-content-start align-items-center mb-5 ">
                      Login
                    </h3>
                    <div className="mb-3">
                      <Form onSubmit={() => formik.handleSubmit()}>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                                                    </Form.Label>
                                                    <Form.Control onChange={formik.handleChange('email')} value={formik.values.email} type="email" placeholder="Enter email" />
                                                </Form.Group> */}

                        <Input
                          type="email"
                          label="Email Address"
                          error={
                            formik.touched.email && formik.errors.email
                              ? formik.errors.email
                              : ""
                          }
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                        />

                        <Input
                          imageProps={{
                            src: show ? view : hide,
                            onClick: () => {
                              setShow(!show);
                            },
                          }}
                          type={show ? "text" : "password"}
                          label="Password"
                          error={
                            formik.touched.password && formik.errors.password
                              ? formik.errors.password
                              : ""
                          }
                          value={formik.values.password}
                          onChange={formik.handleChange("password")}
                          onBlur={formik.handleBlur("password")}
                          imageClassName={classes.img}
                        />

                        {/* <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control onChange={formik.handleChange('password')} value={formik.values.password} type="password" placeholder="Password" />
                                                    
                                                </Form.Group> */}
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small d-flex justify-content-end">
                            <a href="#!">Forgot password?</a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button className={classes.btn}>Login</Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Login;
