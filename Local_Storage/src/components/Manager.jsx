import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      ref.current.src = "icons/eye.svg";
    } else {
      passwordRef.current.type = "password";
      ref.current.src = "icons/eyecross.svg";
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      const newPassword = { ...form, id: uuidv4() };
      setPasswordArray([...passwordArray, newPassword]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]));
      setForm({ site: "", username: "", password: "" });
      toast.success('Password saved!');
    } else {
      toast.error('Error: Password not saved!');
    }
  };

  const deletePassword = (id) => {
    if (confirm("Do you really want to delete this password?")) {
      const updatedPasswords = passwordArray.filter(item => item.id !== id);
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      toast.success('Password Deleted!');
    }
  };

  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find(item => item.id === id);
    setForm(passwordToEdit);
    const updatedPasswords = passwordArray.filter(item => item.id !== id);
    setPasswordArray(updatedPasswords);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.info('Copied to clipboard!');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} pauseOnHover theme="light" transition="Bounce" />

      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center mb-8">Your own Password Manager</p>
        <div className="flex flex-col p-4 text-black gap-4 items-center">
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-green-500 w-full p-2" type="text" name="site" id="site" />
          <div className="flex flex-col sm:flex-row w-full justify-between gap-4">
            <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="rounded-full border border-green-500 w-full p-2" type="text" name="username" id="username" />
            <div className="relative w-full">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-500 w-full p-2" type="password" name="password" id="password" />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eyecross.svg" alt="eye" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-400 rounded-full px-8 py-2 hover:bg-green-300 border border-green-900">
            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover" />
            Save Password
          </button>
        </div>

        <div className="passwords mt-8">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 ? (
            <div>No passwords to show</div>
          ) : (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                        <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                        <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.site)}>
                          <lord-icon style={{ width: "25px", height: "25px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                        <span>{item.username}</span>
                        <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.username)}>
                          <lord-icon style={{ width: "25px", height: "25px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                        <span>{item.password}</span>
                        <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.password)}>
                          <lord-icon style={{ width: "25px", height: "25px" }} src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center">
                      <span className="cursor-pointer mx-1" onClick={() => editPassword(item.id)}>
                        <lord-icon style={{ width: "25px", height: "25px" }} src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" />
                      </span>
                      <span className="cursor-pointer mx-1" onClick={() => deletePassword(item.id)}>
                        <lord-icon style={{ width: "25px", height: "25px" }} src="https://cdn.lordicon.com/skkahier.json" trigger="hover" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;