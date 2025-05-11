import React, { useEffect, useState } from "react";
import { Landmark } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate, Link } from "react-router";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    area: "",
    role: "citizen",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { register, error } = useAuth();

  useEffect(() => {
    if (error) {
      setErrorMessage(error); // Display the error from context
    }
  }, [error]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage("Name, email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      const response = await register(formData);
      navigate("/login");
    } catch (error) {
      setErrorMessage(
        error.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-gray">
      <header className="w-full h-16 bg-primary-white rounded-md shadow-md flex items-center px-4 md:px-8 lg:px-24">
        <Landmark size={28} strokeWidth={2.5} className="text-icon-dark" />
        <h2 className="ml-2 text-xl sm:text-2xl font-semibold text-heading-black whitespace-nowrap">
          Grievance Gateway
        </h2>
      </header>

      <div className="flex items-center justify-center py-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-heading-black">
              Create an Account
            </h1>
            <p className="mt-2 text-md text-para-gray">Sign up to continue</p>
          </div>

          <div className="bg-primary-white p-8 rounded-lg shadow-md">
            {errorMessage && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                {errorMessage}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSignup}>
              <div>
                <label className="block text-sm font-medium text-label-text">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="mt-1 w-full border border-inputbox-border rounded-md px-3 py-2 focus:outline-none focus:ring-inputbox-focus focus:border-inputbox-focus"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-label-text">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="mt-1 w-full border border-inputbox-border rounded-md px-3 py-2 focus:outline-none focus:ring-inputbox-focus focus:border-inputbox-focus"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-label-text">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  name="password"
                  className="mt-1 w-full border border-inputbox-border rounded-md px-3 py-2 focus:outline-none focus:ring-inputbox-focus focus:border-inputbox-focus"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-label-text">
                  Area
                </label>
                <input
                  type="text"
                  placeholder="Your area"
                  name="area"
                  className="mt-1 w-full border border-inputbox-border rounded-md px-3 py-2 focus:outline-none focus:ring-inputbox-focus focus:border-inputbox-focus"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-label-text">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border border-inputbox-border rounded-md px-3 py-2 focus:outline-none focus:ring-inputbox-focus focus:border-inputbox-focus"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="citizen">Citizen</option>
                  <option value="officer">Officer</option>
                  <option value="admin">Admin</option>
                </select>
              </div> */}

              <button
                type="submit"
                className="w-full bg-button-normal text-primary-white py-2 px-4 rounded-md hover:bg-button-hover transition"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>

            <hr className="mt-10 opacity-30" />

            <div className="text-center mt-4 text-sm">
              <p>Already have an account?</p>
              <br />
              <Link
                to="/login"
                className="hover:underline rounded-xl p-2 bg-button-light"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-label-text py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 text-sm">
          <div className="min-w-[200px]">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-[200px]">
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track Grievance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-[200px]">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p>📧 xyz@gov.in</p>
            <p>📞 123456789</p>
          </div>

          <div className="min-w-[200px]">
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#">
                <FaFacebookF className="text-font-normal hover:text-font-hover" />
              </a>
              <a href="#">
                <FaTwitter className="text-font-normal hover:text-font-hover" />
              </a>
              <a href="#">
                <FaInstagram className="text-font-normal hover:text-font-hover" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
          © 2025 Grievance Gateway. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
