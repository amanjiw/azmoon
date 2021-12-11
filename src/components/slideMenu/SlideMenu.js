import React from "react";
import classes from "./SlideMenu.module.css";
import { users } from "../../data/users";
import { useStoreContext } from "../../store/store";
const SlideMenu = () => {
  const { slideMenu, hideMenu } = useStoreContext();

  const hideMenuHandle = () => hideMenu();
  return (
    <>
      {" "}
      <div
        dir="rtl"
        className={`${
          slideMenu === true ? classes.slideMenuActive : classes.slideMenuHide
        } ${classes.slideMenu}`}
      >
        <div className={classes.slideMenuContainer}>
          <div className={classes.SlideMenuImg}>
            <p>{users.logo}</p>
          </div>
        </div>
        <div className={classes.slideMenuItems}>
          <div className={classes.items}>
            <p>خانه</p>
          </div>
          <div className={classes.items}>
            <p>محصولات</p>
          </div>
          <div className={classes.items}>
            <p>درباره ما</p>
          </div>
        </div>
      </div>
      <div
        dir="rtl"
        className={`${classes.backdrop} ${
          slideMenu === true ? classes.backdropActive : classes.backdropHide
        }`}
        onClick={hideMenuHandle}
      ></div>
    </>
  );
};

export default SlideMenu;
