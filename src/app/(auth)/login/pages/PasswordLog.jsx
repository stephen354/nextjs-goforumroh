"use client";
import { useState } from "react";
import Input from "@/components/forms/Input";
import {Button, BackButton} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import Terms from "@/components/forms/Terms";
import { apiFetch } from "@/api/apiFetch";

export default function PasswordLog({ form, setForm, prevStep }){

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

    const handleChange = (e) => {
        setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));

        setError("");
    };

    const handleSubmit = async () => {
        try {

        const res = await apiFetch({
            endpoint: '/hotel-business/login',
            method: 'POST',
            body: { 
                email: form.email,
                password: form.password,
            },
        });
        console.log(res);
            if(res.success){   
                window.location.href = "/dashboard";
            }else{
                setError("Email or Password Invalid")
            }

        } catch (err) {
            setError(err.message);
        }
    };

    const backButton = () =>{
        prevStep(); 
    }

    return (
        <div className="auth-left__form">
            <BackButton  onClick={backButton}/>
            <AuthTitle title={"Enter your password"} subtitle={<>Enter your password for <strong>{form.email}</strong></>}/>
            <div className="auth-left__form-input">
                
                <Input
                    label="Password"
                    name="password"
                    value={form.password}
                    type="password"
                    placeholder={"Enter your Password"}
                    onChange={handleChange}
                    className={`${error ? "inputError":""}`}
                />
                 {error && (
                        <div className="error-message">{error}</div>
                    )}
                <div>
                    <button className="forgot-password">Forgot password ?</button>
                </div>  
                <Button onClick={handleSubmit}>Continue</Button>
            </div>
            <div className="auth-left__form-footer">
                {/* <ButtonLight onClick={handleSubmit}>Create your partner account</ButtonLight> */}
                <Terms/>
            </div>
        </div>
    )
}