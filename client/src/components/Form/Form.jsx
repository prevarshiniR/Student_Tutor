import { useState } from "react";

export const Form = ({ onsubmit, formType = "login" }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(formData);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="m-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-half mt-10"
      >
        {formType === "signup" && (
          <div className="flex flex-col">
            <label className="mb-2.5 text-base" htmlFor="firstname">
              First Name:
            </label>
            <input
              className="mb-2.5 p-2.5 text-base border"
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="Enter your first name"
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
        {formType === "signup" && (
          <div className="flex flex-col">
            <label className="mb-2.5 text-base" htmlFor="lastname">
              Last Name:
            </label>
            <input
              className="mb-2.5 p-2.5 text-base border"
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Enter your last name"
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
        <div className="flex flex-col">
          <label className="mb-2.5 text-base" htmlFor="email">
            Email:
          </label>
          <input
            className="mb-2.5 p-2.5 text-base border"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your emailId"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2.5 text-base" htmlFor="password">
            Password:
          </label>
          <input
            className="mb-2.5 p-2.5 text-base border"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {formType === "signup" && (
          <div className="flex flex-col">
            <label className="mb-2.5 text-base" htmlFor="mobile">
              Mobile Number:
            </label>
            <input
              className="mb-2.5 p-2.5 text-base border"
              type="number"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter your mobile number"
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
        <button
          type="submit"
          className="p-2.5 bg-[#28a745] text-[#fff] border-none cursor-pointer"
        >
          {formType === "signup" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};
