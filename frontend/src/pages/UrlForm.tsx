import React from "react";
import axios from "axios"; // Import axios
import { useForm, useFieldArray } from "react-hook-form";

type Endpoint = {
    endpoint: string;
    is_critical: boolean;
};

type UrlFormInputs = {
    website_name: string;
    email: string;
    phone_no: string;
    endpoints: Endpoint[];
};

const UrlForm: React.FC = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<UrlFormInputs>({
        defaultValues: {
            endpoints: [{ endpoint: "", is_critical: false }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "endpoints",
    });

    const onSubmit = async (data: UrlFormInputs) => {
        try {
            const response = await axios.post("/url", data); // Replace '/url' with your backend API endpoint
            console.log("Response from API:", response.data);
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("There was an error submitting your data.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-2xl font-bold mb-4">Enter the configuration for your website</h1>

                {/* Website Name Field */}
                <div className="mb-4">
                    <label htmlFor="website_name" className="block font-medium mb-2">Website Name:</label>
                    <input
                        {...register("website_name", { required: "Website name is required" })}
                        type="text"
                        id="website_name"
                        placeholder="Enter the website name"
                        className="p-2 text-base border border-gray-300 rounded w-full"
                    />
                    {errors.website_name && <div className="text-red-500 text-sm mt-1">{errors.website_name.message}</div>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Email:</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="p-2 text-base border border-gray-300 rounded w-full"
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>}
                </div>

                {/* Phone Number Field */}
                <div className="mb-4">
                    <label htmlFor="phone_no" className="block font-medium mb-2">Phone Number:</label>
                    <input
                        {...register("phone_no", { required: "Phone number is required" })}
                        type="tel"
                        id="phone_no"
                        placeholder="Enter your phone number"
                        className="p-2 text-base border border-gray-300 rounded w-full"
                    />
                    {errors.phone_no && <div className="text-red-500 text-sm mt-1">{errors.phone_no.message}</div>}
                </div>

                {/* Endpoints Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Endpoints</h2>
                    {fields.map((field, index) => (
                        <div key={field.id} className="mb-4 p-4 border border-gray-200 rounded">
                            <label htmlFor={`endpoints.${index}.endpoint`} className="block font-medium mb-2">Endpoint:</label>
                            <input
                                {...register(`endpoints.${index}.endpoint`, { required: "Endpoint is required" })}
                                type="text"
                                id={`endpoints.${index}.endpoint`}
                                placeholder="Enter the endpoint URL"
                                className="p-2 text-base border border-gray-300 rounded w-full mb-2"
                            />

                            <div className="flex items-center">
                                <input
                                    {...register(`endpoints.${index}.is_critical`)}
                                    type="checkbox"
                                    id={`endpoints.${index}.is_critical`}
                                    className="mr-2"
                                />
                                <label htmlFor={`endpoints.${index}.is_critical`}>Is Critical</label>
                            </div>
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="bg-red-500 text-white py-1 px-3 rounded mt-2 hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => append({ endpoint: "", is_critical: false })}
                        className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
                    >
                        Add Endpoint
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UrlForm;
