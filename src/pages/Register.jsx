import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const[register,setRegister] = useState({
    fullname:"",
    username:"",
    age:"",
    mobile:"",
    email:"",
    profileurl:"",
    dob:"",
    gender:"",
    courses:"",
    password:"",
    confirmpassword:""

  })
  const handleSubmit =async (e)=>{
     
e.preventDefault()
console.log(register)

try{
const result = await axios.post("http://localhost:3000/users",register);
if(result.status === 201){
  toast.success("Registration successfully done ✅",{position:"top-center"})
}
}
catch (error){
toast.error("Failed to Register 😕")
console.log(error)
}
  }
  const handleInput = (e)=>{
    const{name,value} = e.target;
setRegister({...register,[name]:value})
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-16">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full -z-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full -z-10 "></div>

      <div className="w-full max-w-lg rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.5)] p-10 mt-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center shadow-xl">
            <span className="text-4xl font-bold text-black">S</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join us and start your journey today.
        </p>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>

  {/* Full Name */}
  <div>
    <label className="text-gray-300 text-sm" >Full Name</label>
    <input
      type="text"
      placeholder="Enter your full name"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition "
      name="fullname"
      value={register.fullname}
      onChange={handleInput}
    />
  </div>

  {/* Username */}
  <div>
    <label className="text-gray-300 text-sm">Username</label>
    <input
      type="text"
      placeholder="Enter username"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
            name="username"
      value={register.username}
      onChange={handleInput}
    />
  </div>

  {/* Age */}
  <div>
    <label className="text-gray-300 text-sm">Age</label>
    <input
      type="number"
      placeholder="Enter your age"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
            name="age"
      value={register.age}
      onChange={handleInput}
    />
  </div>

  {/* Mobile */}
  <div>
    <label className="text-gray-300 text-sm">Mobile Number</label>
    <input
      type="tel"
      placeholder="Enter mobile number"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
                  name="mobile"
      value={register.mobile}
      onChange={handleInput}
    />
  </div>

  {/* Email */}
  <div>
    <label className="text-gray-300 text-sm">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
                  name="email"
      value={register.email}
      onChange={handleInput}
    />
  </div>

  {/* Profile URL */}
  <div>
    <label className="text-gray-300 text-sm">Profile URL</label>
    <input
      type="url"
      placeholder="https://example.com/profile"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
                  name="profileurl"
      value={register.profileurl}
      onChange={handleInput}
    />
  </div>

  {/* Date of Birth */}
  <div>
    <label className="text-gray-300 text-sm">Date of Birth</label>
    <input
      type="date"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition "
                  name="dob"
      value={register.dob}
      onChange={handleInput}
    />
  </div>

  {/* Gender */}
  <div>
    <label className="text-gray-300 text-sm block mb-3">Gender</label>

    <div className="flex gap-6 text-gray-300">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="gender" className="accent-white"  value="Male" onChange={handleInput} />
        Male
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="gender" className="accent-white" value="Female" onChange={handleInput}  />
        Female
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="radio" name="gender" className="accent-white" value="Other" onChange={handleInput}  />
        Other
      </label>
    </div>
  </div>

  {/* Course */}
  <div>
    <label className="text-gray-300 text-sm">Course</label>

    <select
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
      name="courses" value={register.courses} onChange={handleInput} 
    >
      <option value="">Select Course</option>
      <option>BCA</option>
      <option>B.Tech</option>
      <option>B.Sc</option>
      <option>B.Com</option>
      <option>MCA</option>
      <option>M.Tech</option>
      <option>MBA</option>
      <option>M.Sc</option>
    </select>
  </div>

  {/* Password */}
  <div>
    <label className="text-gray-300 text-sm">Password</label>
    <input
      type="password"
      placeholder="Create password"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
      name="password"
      value={register.password}
      onChange={handleInput}
    />
  </div>

  {/* Confirm Password */}
  <div>
    <label className="text-gray-300 text-sm">Confirm Password</label>
    <input
      type="password"
      placeholder="Confirm password"
      className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
          name="confirmpassword"
      value={register.confirmpassword}
      onChange={handleInput}
    />
  </div>

  {/* Terms */}
  <div className="flex items-center gap-3 text-sm text-gray-400">
    <input
      type="checkbox"
      className="w-4 h-4 accent-white"
    />
    <p>
      I agree to the
      <span className="text-white hover:underline cursor-pointer">
        {" "}Terms & Conditions
      </span>
    </p>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full h-14 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-lg"
  >
    Create Account
  </button>

</form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?
          <span className="text-white ml-2 cursor-pointer hover:underline">
            <Link to={"/login"}> Login </Link>
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;