import { Button } from "@material-tailwind/react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../store/thunk/fetchLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    control,

    formState: { errors, isValid },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    dispatch(fetchLogin(formData, history));
  };

  return (
    <div>
     
      <div className="container my-5 w-[30%] font-['montserrat'] font-bold">
        <h2 className="text-2xl font-bold justify-center items-center py-10">
          LOG IN
        </h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="py-4" controlId="email">
            <Form.Control
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Try a valid email address",
                },
              })}
              placeholder="Enter your Email"
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="pb-4" controlId="password">
            <Form.Control
              type="password"
              {...register("password", {
                required: " Please confirm your password",
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button disabled={!isValid} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
