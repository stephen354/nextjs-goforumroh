"use client";
import { useState } from "react";
import Input, { PasswordInput } from "@/components/forms/Input";
import {Button, BackButton} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import Terms from "@/components/forms/Terms";
import { getPasswordRules } from "@/utils/validatePassword";
import { apiFetch } from "@/api/apiFetch";
import { useRouter } from "next/navigation";

export default function Password({ form, setForm, prevStep }){
    const router = useRouter();
    const initialForm = {
        password: "",
        confirmPassword: "",
    };
    const rules = getPasswordRules(["length", "uppercase", "number"]); 

    const [pass, setCekPass] = useState(initialForm);
    const [error,setError] = useState(null);

    const [validRules,setRules] = useState(true);

    const handleChange = (e) => {
        setCekPass(p => ({
            ...p, 
            [e.target.name]: e.target.value
        }));
        setError("");
    };

    const signUp = async () => {
         try {
            const res = await apiFetch({
                endpoint: '/hotel-business/store',
                method: 'POST',
                body: { 
                    email: form.email,
                    firstname: form.firstname,
                    lastname: form.lastname,
                    username: form.username,
                    phone: form.phone,
                    password: form.password,
                },
            });
            console.log(res);
                if(res.success){   
                   router.push(`/verivy?email=${encodeURIComponent(form.email)}`);
                }else{
                    setError(res.errors)
                }
    
            } catch (err) {
                setError(err.message);
            }
    }

    const handleSubmit = async() => {
        if(!pass.password){
            setError("Please fill in all fields ");
            return;
        }
        if(pass.password != pass.confirmPassword){
            setError("Passwords do not match");
            setCekPass(initialForm)
            return;
        }
        const isValid = rules.every((rule) => rule.test(pass.password));
        setRules(isValid);
        if(!isValid){
            return;
        }
        form.password = pass.password;
        await signUp();
        
    };

    const backButton = () =>{
        prevStep(); 
    }

    return (
        <div className="auth-left__form">
            <BackButton  onClick={backButton}/>
            <AuthTitle title={"Create password"} subtitle={"Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers."}/>
            <div className="auth-left__form-input">
                <PasswordInput
                    label="Password"
                    name="password"
                    value={pass.password}
                    placeholder={"Enter your password"}
                    onChange={handleChange}
                    className={`${error ? "inputError":""}`}
                />
                <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={pass.confirmPassword}
                    placeholder={"Enter your confirm password"}
                    onChange={handleChange}
                    className={`${error ? "inputError":""}`}
                />
                {error && (
                        <div className="error-message">{error}</div>
                    )}
                    <div className={`auth-left__rule ${!validRules ? "rule-show" : ""}`}>
                        {rules.map((rule) => {
                            const valid = rule.test(pass.password);
                            return (
                                <li key={rule.key} className={valid ? "li-text-green" : "li-text-red"}>
                                {valid ? "✔" : "✖"} {rule.label}
                                </li>
                            );
                        })}
                    </div>
                <Button onClick={handleSubmit}>Create account</Button>
            </div>
            <div className="auth-left__form-footer">
                {/* <ButtonLight onClick={handleSubmit}>Create your partner account</ButtonLight> */}
                <Terms/>
            </div>
        </div>
    )
}