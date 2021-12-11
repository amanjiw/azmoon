import React from "react";
import { createPortal } from "react-dom";
import { useStoreContext } from "../../store/store";
import classes from "./modal.module.css";

const Modal = ({ reset, resetStepper }) => {
  const { hideModal } = useStoreContext();
  //hide & reset the form
  const hideModalHandler = () => {
    hideModal();
    resetStepper();
    reset();
  };
  return (
    <>
      {createPortal(
        <div>
          <div className={classes.container}>
            <div className={classes.modalHeader}>
              <div className={classes.iconModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p>ثبت نام</p>
            </div>
            <div className={classes.modalMain}>
              <h1>.عملیات با موفقیت انجام شد</h1>
              <button onClick={hideModalHandler}>باشه</button>
            </div>
          </div>
          <div onClick={hideModalHandler} className={classes.backdrop}></div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
