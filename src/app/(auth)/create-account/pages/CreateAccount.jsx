"use client";
import { useState } from "react";
import Input from "@/components/forms/Input";
import {Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import Terms from "@/components/forms/Terms";
import { useRouter } from 'next/navigation';

export default function CreateAccountPage({ form, setForm, nextStep  }){
    const router = useRouter() ;
    const [error,setError] = useState(null);

    const handleChange = (e) => {
        setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

      const handleSubmit = () => {
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

    const loginPage = () => {
        router.push('/login');
    };

    return (
        <div className="auth-left__form">
            <AuthTitle title={"Create your partner account"} subtitle={"Create an account to list and manage your property."}/>
            <div className="auth-left__form-input">
                <Input
                    label="Email Address"
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder={"Please fill in all fields"}
                    onChange={handleChange}
                    className={`${error ? "inputError":""}`}
                />
                {error && (
                        <div className="error-message">{error}</div>
                    )}
                <Button onClick={handleSubmit}>Continue</Button>
                
            </div>
            <div className="auth-left__form-footer">
                <ButtonLight onClick={loginPage}>Login</ButtonLight>
                <Terms/>
            </div>
        </div>
    )
}