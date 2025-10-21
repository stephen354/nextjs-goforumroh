"use client";

import Input from "@/components/forms/Input";
import {Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import Terms from "@/components/forms/Terms";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { maskEmail } from "@/utils/maskEmail";
import { apiFetch } from "@/api/apiFetch";

export default function resetPassword({}){
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
     });
    const [error,setError] = useState(null);

    const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError("");
  };

    const resetPass = async () => {
         try {
            const res = await apiFetch({
                endpoint: '/hotel-business/forgot-password/request ',
                method: 'POST',
                body: { 
                    email: form.email,
                },
            });
            console.log(res);
                if(res.success){   
                   router.push(`/send-link?email=${maskEmail(form.email)}`);
                }else{
                    setError(res.errors)
                }
    
            } catch (err) {
                setError(err.message);
            }
    }

  const handleNext = () => {
    if (!form.email) {
      setError("Please enter your email" );
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address" );
      return
    } 
    resetPass();
  };


      
  // if (error) return <div>Error: {error}</div>;

    return (
        <div className="auth-left__form">
            <AuthTitle title={"Forgot your password ?"} subtitle={"Confirm your username and we'll send you a link to reset your password."}/>
            <div className="auth-left__form-input">
                <Input
                    label="Email Address"
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder={"Enter your Email Address"}
                    onChange={handleChange}
                    className={`${error ? "inputError":""}`}
                />
                {error && (
                        <div className="error-message">{error}</div>
                  )}
                <Button onClick={handleNext}>Continue</Button>
            </div>
            <div className="auth-left__form-footer">
                <Terms/>
            </div>
        </div>
    )
}