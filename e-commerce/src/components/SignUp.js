import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "@material-tailwind/react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mt-5 w-[30%] font-['montserrat'] font-bold">
      <h2 className="text-2xl font-bold justify-center items-center py-10">
        SIGN UP
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            {...register("name", {
              required: "Please enter your name",
              minLength: {
                value: 3,
                message: "Name should be at least three character",
              },
            })}
            placeholder="Enter your name"
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="py-4" controlId="email">
          <Form.Control
            type="email"
            {...register("email", { required: "Please enter your email",  validate: (val: any) => {
                const emailRegex =
                  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailRegex.test(val)) {
                  return "Please enter a valid email address.";
                }
              },
             })}
            placeholder="Enter your Email"
          />
        {errors.email && (
            <Form.Text className="text-danger">{errors.email.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            {...register("password", { required: " Please confirm your password",  minLength: {
                value: 8,
                message: "At least 8 character required",
              }, })}
            placeholder="Confirm password"
          />
        {errors.password && (
            <Form.Text className="text-danger">{errors.password.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="py-4 flex items-center gap-2 " controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control as="select" placeholder="Store">
            <option value="user">Customer</option>
            <option value="admin">Store</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
