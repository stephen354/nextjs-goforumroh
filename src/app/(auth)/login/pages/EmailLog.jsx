"use client";

import Input from "@/components/forms/Input";
import {Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import Terms from "@/components/forms/Terms";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function EmailLog({ form, setForm, nextStep  }){
    const router = useRouter();
    const [error,setError] = useState(null);

    const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError("");
  };

  const handleNext = () => {
    if (!form.email) {
      setError("Please enter your email" );
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address" );
      return
    } 
      nextStep(); 
  };

  const createAccount = () => {
    router.push('/create-account')
  };

      
  // if (error) return <div>Error: {error}</div>;

    return (
        <div className="auth-left__form">
            <AuthTitle title={"Sign in to manage your property"} subtitle={"Create an account to list and manage your property."}/>
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
                <ButtonLight onClick={createAccount}>Create your partner account</ButtonLight>
                <Terms/>
            </div>
        </div>
    )
}