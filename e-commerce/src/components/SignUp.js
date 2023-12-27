import React, { useState, useEffect } from "react";
import { AxiosInstance } from "../api/api";
import { useForm, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Button } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    
    formState: { errors, isValid },
  } = useForm();

  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectedRole = watch("role_id");
  const password = watch("password", "");
  const role = watch("role", "customer");

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    AxiosInstance.get("/roles")
      .then((response) => {
        console.log("Roles Data", response.data);
        setRoles(response.data);
        setValue("role_id", response.data[0]?.id);
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setValue]);

  const onSubmit = (data) => {
    setIsLoading(true);
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: selectedRole,
    };

    if (selectedRole === "2") {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxId,
        bank_account: data.storeBankAccount,
      };
    }

    AxiosInstance.post("/signup", formData)
      .then((response) => {
        console.log("Registration successful", response);
        toast.success("Congratulations! You've successfully signed up!");
        toast.warning(
          "You need to click the link in the email to activate your account!"
        );
        history.goBack();
      })
      .catch((error) => {
        console.error("Registration failed!", error);
        console.log(error);
        toast.error("Registration failed!");
      })
      .finally(() => {
        setIsLoading(false);
      });
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

        <Form.Group controlId="role_id" className="mb-6">
          <Form.Label>Role</Form.Label>
          <select
            id="role_id"
            {...register("role_id", { required: "Role is required" })}
            className="form-select w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
            value={watch("role_id")}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <Form.Text className="text-danger">
              {errors.role_id.message}
            </Form.Text>
          )}
        </Form.Group>

        {selectedRole === "2" && (
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
        <Button disabled={!isValid} type="submit">Submit</Button>
      </Form>
    
    </div>
  );
};

export default SignUp;
