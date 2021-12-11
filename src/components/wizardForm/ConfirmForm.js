import React from "react";
import classes from "./confirmForm.module.css";
import { useStoreContext } from "../../store/store";
const ConfirmForm = () => {
  const {
    formInfo: { username, password, email },
  } = useStoreContext();
  return (
    <div className={classes.container}>
      <table>
        <tbody>
          <tr>
            <th>نام کاربری</th>
            <td>: {username}</td>
          </tr>
          <tr>
            <th>ایمیل</th>
            <td>: {email}</td>
          </tr>
          <tr>
            <th>رمز عبور</th>
            <td>: {password}</td>
          </tr>
        </tbody>
      </table>
      <h2>اطلاعات وارد شده را تایید میکنید؟</h2>
    </div>
  );
};

export default ConfirmForm;
