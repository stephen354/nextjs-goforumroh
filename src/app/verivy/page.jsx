"use client";

import {Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import { useSearchParams } from "next/navigation";

export default function verivy(){
   const searchParams = useSearchParams();
   const email = searchParams.get("email");

   const handleNext = () =>{

   }
    return (
        <div className={styles.verivy}>
            <AuthTitle className={styles.title} title={"Verify your email address"} subtitle={<>We sent you an email with a verification link to <strong>{email}</strong>  To confirm your account please follow the link in the email we just sent.</>}/>
            <div className={styles["verivy-button"]}>
                <Button onClick={handleNext}>Continue</Button>
            </div>
        </div>
    )
}