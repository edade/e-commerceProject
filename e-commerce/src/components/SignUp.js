import React from "react";
import { useForm, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "@material-tailwind/react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const password = watch("password", "");
  const role = watch("role", "customer");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container my-5 w-[30%] font-['montserrat'] font-bold">
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

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            {...register("password", {
              required: " Please confirm your password",
              minLength: {
                value: 8,
                message: "At least 8 character required",
              },
              validate: {
                uppercase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain at least one uppercase letter",
                lowercase: (value) =>
                  /[a-z]/.test(value) ||
                  "Password must contain at least one lowercase letter",
                number: (value) =>
                  /\d/.test(value) ||
                  "Password must contain at least one number",
                specialChar: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  "Password must contain at least one special character",
              },
            })}
            placeholder="Confirm password"
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="pt-4" controlId="confirmPassword">
          <Form.Control
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <Form.Text className="text-danger">
              {errors.confirmPassword.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="py-4 flex items-center gap-2" controlId="role">
          <Form.Label>Role</Form.Label>
          <Controller
            name="role"
            control={control}
            defaultValue="customer"
            render={({ field }) => (
              <Form.Control as="select" {...field}>
                <option value="customer">Customer</option>
                <option value="store">Store</option>
              </Form.Control>
            )}
          />
        </Form.Group>

        {role === "store" && (
          <>
            <Form.Group controlId="storeName">
              <Form.Label>Store Name</Form.Label>

              <Form.Control
                type="text"
                {...register("storeName", {
                  required: "Store name is required",
                  minLength: {
                    value: 3,
                    message: "Store name should be at least three characters",
                  },
                })}
              />

              {errors.storeName && (
                <Form.Text className="text-danger">
                  {errors.storeName.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="storePhone">
              <Form.Label>Store Phone</Form.Label>
              <Form.Control
                placeholder=""
                type="text"
                {...register("storePhone", {
                  required: "Store phone is required",
                  pattern: {
                    value: /^\+90(5\d{9})$/,
                    message:
                      "Enter a valid Turkish phone number starting with +90",
                  },
                })}
              />
              {errors.storePhone && (
                <Form.Text className="text-danger">
                  {errors.storePhone.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="storeTaxId">
              <Form.Label>Store Tax ID</Form.Label>
              <Form.Control
                placeholder="TXXXXVXXXXXX"
                type="text"
                {...register("storeTaxId", {
                  required: "Tax ID is required",
                  pattern: {
                    value: /T\d{4}V\d{6}/,
                    message: "Enter a valid Tax ID",
                  },
                })}
              />
              {errors.storeTaxId && (
                <Form.Text className="text-danger">
                  {errors.storeTaxId.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="py-4" controlId="storeBankAccount">
              <Form.Label>Store Bank Account</Form.Label>
              <Form.Control
                type="text"
                {...register("storeBankAccount", {
                  required: "IBAN number is required",
                  pattern: {
                    value: /TR\d{24}/,
                    message: "Please enter valid IBAN number",
                  },
                })}
              />
              {errors.storeBankAccount && (
                <Form.Text className="text-danger">
                  {errors.storeBankAccount.message}
                </Form.Text>
              )}
            </Form.Group>
          </>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
