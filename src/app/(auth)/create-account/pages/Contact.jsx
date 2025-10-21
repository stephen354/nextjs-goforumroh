"use client";
import { useState } from "react";
import Input,{PhoneInput} from "@/components/forms/Input";
import {BackButton, Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import Terms from "@/components/forms/Terms";
import Image from "next/image";

export default function Contact({ form, setForm, nextStep , prevStep  }){

    const [phone, setPhone] = useState("");
    const handleChange = (e) => {
        setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

    const createPass = () => {
        if (!form.email) {
        alert("Please fill in all fields");
        return;
            }        
          nextStep();
        };

    const backButton = () =>{
        prevStep(); 
    }

    return (
        <div className="auth-left__form">
            <BackButton  onClick={backButton}/>
            <AuthTitle title={"Contact details"} subtitle={"Create an account to list and manage your property."}/>
            <div className="auth-left__form-input">
                <Input
                    label="First Name"
                    name="firstname"
                    value={form.firstname}
                    type="text"
                    placeholder={"Enter your first name"}
                    onChange={handleChange}
                />
                <Input
                    label="Last Name"
                    name="lastname"
                    value={form.lastname}
                    type="text"
                    placeholder={"Enter your last name"}
                    onChange={handleChange}
                />
                <Input
                    label="Username"
                    name="username"
                    value={form.username}
                    type="text"
                    placeholder={"Enter your username"}
                    onChange={handleChange}
                />
                <PhoneInput
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    type="tel"
                    placeholder={"(888) 888-8888"}
                    onChange={handleChange} 
                />
                <div className="auth-left__info">
                   <Image src={"/icons/info.png"} alt="info" width={25} height={25}/> We'll text a two-factor authentication code to this number when you sign in.
                </div>
                <Button onClick={createPass}>Continue</Button>
            </div>
            <div className="auth-left__form-footer">
                <Terms/>
            </div>
        </div>
    )
}