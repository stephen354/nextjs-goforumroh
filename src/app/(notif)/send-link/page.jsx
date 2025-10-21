"use client";

import {Button, ButtonLight} from "@/components/forms/Button";
import AuthTitle from "@/components/forms/AuthTitle";
import { useSearchParams } from "next/navigation";
import "@/styles/layout/_auth-verify.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function SendLink(){
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
                 <AuthTitle className="title" title={"Check your inbox"} subtitle={<>We just emailed instructions and a reset password link to <strong>{email}</strong>. It might take a few minutes to arrive.</>}/>
                <Button onClick={handleNext}>Continue</Button>
            </div>
            </div>
    )
}