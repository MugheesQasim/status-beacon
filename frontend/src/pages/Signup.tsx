import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type SignupFormInputs = {      
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confrim_password: string;
};

const Signup: React.FC = () => {
  // Call useForm inside the component
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>();

  const [FormData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confrim_password: "",
  });

  // Here we submit the form data
  const saveData: SubmitHandler<SignupFormInputs> = (formData) => {
    if (formData.password === formData.confrim_password) {
      console.log("Form Data :", formData);
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit(saveData)}>
        {/* First-Name Field */}
        <div>
          <label>First Name</label>
          <input
            {...register('first_name', { required: true })}
            name="first_name"
            type="text"
            placeholder="Enter your name"
          />
          {errors.first_name ? <div>The First Name is required</div> : null}
        </div>

        {/* Last-Name Field */}
        <div>
          <label>Last Name</label>
          <input
            {...register('last_name', { required: true })}
            name="last_name"
            type="text"
            placeholder="Enter your last name"
          />
          {errors.last_name ? <div>The Last Name is required</div> : null}
        </div>

        {/* Email Field */}
        <div>
          <label>Email</label>
          <input
            {...register('email', { required: true })}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email ? <div>Email is required</div> : null}
        </div>

        {/* Password Field */}
        <div>
          <label>Password</label>
          <input
            {...register('password', { required: true, minLength: { value: 6, message: "Password must be of length 6" } })}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password ? <div>{errors.password.message}</div> : null}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <input
            {...register('confrim_password', { required: true, minLength: { value: 6, message: "Confirm Password must be of length 6" } })}
            name="confrim_password"
            type="password"
            placeholder="Retype your password"
          />
          {errors.confrim_password ? <div>{errors.confrim_password.message}</div> : null}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
