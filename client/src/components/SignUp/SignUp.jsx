import { Form } from "../Form/Form";

export const SignUp = () => {
  return (
    <div className="flex flex-col justify-content my-0 mx-auto">
      <h1 className="w-full text-center">Sign Up</h1>
      <Form formType="signup"/>
    </div>
  );
};
