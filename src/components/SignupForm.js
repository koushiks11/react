import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    college: '',
    phoneNo: '',
    address: '',
    gender: '',
    education: '',
    languages: [],
    degree: '',
    company: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('mentee');

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function checkboxChangeHandler(event) {
    const language = event.target.value;
    const checked = event.target.checked;

    setFormData((prevData) => {
      let languages = prevData.languages;
      if (checked) {
        languages = [...languages, language];
      } else {
        languages = languages.filter((lang) => lang !== language);
      }
      return {
        ...prevData,
        languages,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoggedIn(true);
    toast.success('Account Created');
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };

    console.log('printing Final account data ');
    console.log(finalData);

    navigate('/dashboard');
  }

  function renderMenteeForm() {
    return (
      <div>
        {/* First Name and Last Name */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">First Name*</p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Last Name*</p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="input"
            />
          </label>
        </div>

        {/* Email, Date of Birth, and College */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Email Address*</p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Date of Birth</p>
            <input
              type="text"
              name="dob"
              onChange={changeHandler}
              value={formData.dob}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">College</p>
            <input
              type="text"
              name="college"
              onChange={changeHandler}
              value={formData.college}
              className="input"
            />
          </label>
        </div>

        {/* Phone Number, Password, and Confirm Password */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Phone Number</p>
            <input
              type="text"
              name="phoneNo"
              onChange={changeHandler}
              value={formData.phoneNo}
              className="input"
            />
          </label>

          <label className="w-full relative">
            <p className="text-sm text-gray-700 mb-1">Create Password*</p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={changeHandler}
              value={formData.password}
              className="input"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#999" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#999" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-sm text-gray-700 mb-1">Confirm Password*</p>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="input"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#999" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#999" />
              )}
            </span>
          </label>
        </div>

        {/* Address, Gender, Education, and Language */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Address</p>
            <input
              type="text"
              name="address"
              onChange={changeHandler}
              value={formData.address}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Gender</p>
            <input
              type="text"
              name="gender"
              onChange={changeHandler}
              value={formData.gender}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Education</p>
            <input
              type="text"
              name="education"
              onChange={changeHandler}
              value={formData.education}
              className="input"
            />
          </label>

          <div className="w-full">
            <p className="text-sm text-gray-700 mb-1">Language</p>
            <div className="flex flex-wrap">
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="hindi"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                Hindi
              </label>
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="english"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                English
              </label>
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="kannada"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                Kannada
              </label>
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="tulu"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                Tulu
              </label>
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="telugu"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                Telugu
              </label>
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="tamil"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                Tamil
              </label>
              <label className="checkbox-label mr-4">
                <input
                  type="checkbox"
                  value="marathi"
                  onChange={checkboxChangeHandler}
                  className="checkbox"
                />
                Marathi
              </label>
            </div>
          </div>
        </div>

        <button className="button mt-6">Register</button>
      </div>
    );
  }

  function renderMentorForm() {
    return (
      <div>
        {/* Name, Date of Birth, and Email */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Name*</p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Date of Birth</p>
            <input
              type="text"
              name="dob"
              onChange={changeHandler}
              value={formData.dob}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Email Address*</p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              className="input"
            />
          </label>
        </div>

        {/* Phone Number, Password, and Confirm Password */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Phone Number</p>
            <input
              type="text"
              name="phoneNo"
              onChange={changeHandler}
              value={formData.phoneNo}
              className="input"
            />
          </label>

          <label className="w-full relative">
            <p className="text-sm text-gray-700 mb-1">Create Password*</p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={changeHandler}
              value={formData.password}
              className="input"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#999" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#999" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-sm text-gray-700 mb-1">Confirm Password*</p>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="input"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#999" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#999" />
              )}
            </span>
          </label>
        </div>

        {/* Address, Gender, Education, Company, and Degree */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Address</p>
            <input
              type="text"
              name="address"
              onChange={changeHandler}
              value={formData.address}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Gender</p>
            <input
              type="text"
              name="gender"
              onChange={changeHandler}
              value={formData.gender}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Education</p>
            <input
              type="text"
              name="education"
              onChange={changeHandler}
              value={formData.education}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Company</p>
            <input
              type="text"
              name="company"
              onChange={changeHandler}
              value={formData.company}
              className="input"
            />
          </label>

          <label className="w-full">
            <p className="text-sm text-gray-700 mb-1">Degree</p>
            <input
              type="text"
              name="degree"
              onChange={changeHandler}
              value={formData.degree}
              className="input"
            />
          </label>
        </div>

        <button className="button mt-6">Register</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <div className="mt-4">
        <label className="radio-label">
          <input
            type="radio"
            value="mentee"
            checked={accountType === 'mentee'}
            onChange={() => setAccountType('mentee')}
            className="radio"
          />
          Mentee
        </label>
        <label className="radio-label ml-4">
          <input
            type="radio"
            value="mentor"
            checked={accountType === 'mentor'}
            onChange={() => setAccountType('mentor')}
            className="radio"
          />
          Mentor
        </label>
      </div>

      {accountType === 'mentee' ? renderMenteeForm() : renderMentorForm()}
    </div>
  );
};

export default SignupForm;
