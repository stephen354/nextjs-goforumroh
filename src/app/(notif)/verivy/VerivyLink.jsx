"use client";

import {Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import { useSearchParams } from "next/navigation";
import "@/styles/layout/_auth-verify.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function Verify(){
   const searchParams = useSearchParams();
   const email = searchParams.get("email");
   const router = useRouter() ;

   const handleNext = () =>{
        router.push(`https://mail.google.com/mail/u/0`);
   }
    return (
        <div className="verify-wrapper">
            <div className="verify-content">
                <Image src={"/icons/checklist.png"} alt="checklist" width={72} height={72}/>
                 <AuthTitle className="title" title={"Verify your email address"} subtitle={<>We sent you an email with a verification link to <strong>{email}</strong>  To confirm your account please follow the link in the email we just sent.</>}/>
                <Button onClick={handleNext}>Continue</Button>
            </div>
            </div>
    )
}