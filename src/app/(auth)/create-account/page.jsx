"use client";
import { useEffect, useState } from "react";
import CreateAccountPage from "./pages/CreateAccount";
import Contact from "./pages/Contact";
import Password from "./pages/Password";

export default function CreateAccount(){
  const [form, setForm] = useState({
    email: "",
    firstname:"",
    lastname:"",
    username:"",
    phone:""
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

  const goEmail = () => {
    setStep("email");
    window.history.pushState({ step: "email" }, "");
  };

  const goContact = () => {
    setStep("contact");
    window.history.pushState({ step: "contact" }, "");
  };

  const goPwd = () => {
    setStep("pwd");
    window.history.pushState({ step: "pwd" }, "");
  };

    return (
     <div>
      {step === "email" && (
        <CreateAccountPage
          form={form}
          setForm={setForm}
          nextStep={goContact}
        />
      )}
      {step === "contact" && (
        <Contact
          form={form}
          setForm={setForm}
          prevStep={goEmail}
          nextStep={goPwd}
        />
      )}
      {step === "pwd" && (
        <Password
          form={form}
          setForm={setForm}
          prevStep={goContact}
          nextStep={() => setStep(4)}
        />
      )}
    </div>
    )
}