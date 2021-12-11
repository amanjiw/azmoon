import React from "react";
import classes from "./Stepper.module.css";

const Stepper = ({ stepper, steps }) => {
  return (
    <div className={classes.stepper}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div
            className={
              (stepper === i && classes.stepActive) ||
              (stepper >= i && classes.stepPassed) ||
              (stepper < i && classes.steps)
            }
          >{step}</div>
          {i !== steps.length - 1 && (
            <div
              className={
                (stepper <= i && classes.stepLine) ||
                (stepper > i && classes.stepLinePassed)
              }
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
