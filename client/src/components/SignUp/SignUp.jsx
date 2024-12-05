import { Form } from "../Form/Form";
import axios from "axios";

export const SignUp = () => {
  const onsubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-content my-0 mx-auto">
      <h1 className="w-full text-center">Sign Up</h1>
      <Form formType="signup" onsubmit={onsubmit} />
    </div>
  );
};
