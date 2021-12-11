import React, {  useState } from "react";
import classes from "./wizardForm.module.css";
import Stepper from "./Stepper";
import ConfirmForm from "./ConfirmForm";
import Modal from "../modal/Modal";
import { useStoreContext } from "../../store/store";
import { useForm } from "react-hook-form";

//steps of wizard form
const steps = ["۱", "۲", "۳"];

const WizardForm = () => {
  const [stepper, setStepper] = useState(0);
  const { getFormInfo, activeModal, modal } = useStoreContext();
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const data = watch();

  const stepperHandler = (value) => {
    const maxSteps = steps.length;
    if (stepper > 0) {
      if (value === "prev") setStepper((cur) => cur - 1);
    }
    if (stepper === maxSteps) return;
    if (value === "next") setStepper((cur) => cur + 1);
    if (value === "next" && stepper === 2) getFormInfo(data);
  };

  const backtoFirstStep = () => {
    setStepper(0);
  };

  const cancellHandler = () => {
    reset();
    setStepper(0);
  };

  const formHandler = (data) => {
    console.log(data.username);
    activeModal();
  };

  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };

  return (
    <>
      <div dir="rtl" className={classes.wizardForm}>
        <Stepper stepper={stepper} steps={steps} />

        <div className={classes.mainFormWizar}>
          <form
            onSubmit={handleSubmit(formHandler)}
            onKeyDown={(e) => checkKeyDown(e)}
            action=""
          >
            {stepper === 0 && (
              <>
                <label htmlFor="username">نام کاربری</label>
                <input
                  id="username"
                  {...register("username", { required: "fill username" })}
                  className={classes.input}
                  type="text"
                />
              </>
            )}
            {stepper === 1 && (
              <>
                <label htmlFor="Email">ایمیل</label>
                <input
                  id="Email"
                  {...register("email", { required: "fill username" })}
                  className={classes.input}
                  type="text"
                />
              </>
            )}
            {stepper === 2 && (
              <>
                <label htmlFor="Password">رمز عبور</label>
                <input
                  id="password"
                  {...register("password", { required: "fill username" })}
                  className={classes.input}
                  type="password"
                />
              </>
            )}
            {stepper > 2 && <ConfirmForm />}
            {stepper > 2 && <button type="submit">تایید</button>}
            {stepper > 2 && <button onClick={cancellHandler}>لغو کل</button>}
          </form>

          {stepper <= 2 && (
            <button disabled={!isValid} onClick={() => stepperHandler("next")}>
              بعد
            </button>
          )}
          {stepper > 0 && stepper <= 2 && (
            <button onClick={() => stepperHandler("prev")}>قبل</button>
          )}
        </div>
      </div>
      {modal && <Modal reset={reset} resetStepper={backtoFirstStep} />}
    </>
  );
};

export default WizardForm;
