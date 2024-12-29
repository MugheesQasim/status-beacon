import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginFormInputs = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

    const [FormData, setFormData] = useState({
        email: "",
        password: ""
    });

    const saveData: SubmitHandler<LoginFormInputs> = (formData) => {
        console.log("Form Data :", formData);
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(saveData)}>
                {/* Email Field */}
                <div>
                    <label>Email</label>
                    <input
                        {...register('email',
                            {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email format',
                                }
                            })}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    {errors.email ? <div>{errors.email.message}</div> : null}
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

                {/* Submit Button */}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
