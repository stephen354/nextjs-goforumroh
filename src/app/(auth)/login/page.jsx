"use client";
import { useEffect, useState } from "react"
import EmailLog from "./pages/emailLog";
import PasswordLog from "./pages/PasswordLog"

export default function Loginpage(){

    const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [step, setStep] = useState("email");

    useEffect(() => {
      const handlePopState = (event) => {
        if (event.state?.step) setStep(event.state.step);
        else setStep("email"); // default
      };
      window.addEventListener("popstate", handlePopState);
      window.history.replaceState({ step: "email" }, "");

      return () => window.removeEventListener("popstate", handlePopState);
    }, []);

  const goNext = () => {
    setStep("pwd");
    window.history.pushState({ step: "pwd" }, "");
  };

  const goBack = () => {
    setStep("email");
    window.history.pushState({ step: "email" }, "");
  };


    return (
     <form>
      {step === "email" && (
        <EmailLog
          form={form}
          setForm={setForm}
          nextStep={goNext}
        />
      )}
      {step === "pwd" && (
        <PasswordLog
          form={form}
          setForm={setForm}
          prevStep={goBack}
        />
      )}
    </form>
    )
}