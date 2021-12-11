import React from "react";
import classes from "./NavBar.module.css";
import { users } from "../../data/users";
import tbnLogo from "../../assets/img/a014b685247f500dfbd3e766de8d8404.png";
import { useStoreContext } from "../../store/store";
const NavBar = () => {
  const { showMenu, hideMenu, slideMenu } = useStoreContext();

  const showMenuHandle = () => showMenu();
  const hideMenuHandle = () => hideMenu();

  return (
    <nav className={classes.navbar}>
      <div className={classes.logoTbn}>
        <img src={tbnLogo} alt="tbnlogo" />
      </div>
      <div className={classes.navItem}>
        <div className={classes.author}>
          <div className={classes.authorName}>
            <h3>{users.name}</h3>
            <p dir="rtl"> {users.role} </p>
          </div>
          <div className={classes.authorImg}>
            <p>{users.logo}</p>
          </div>
        </div>
        <div className={classes.menuicon}>
          {!slideMenu && (
            <svg
              onClick={showMenuHandle}
              xmlns="http://www.w3.org/2000/svg"
              className={classes.svgIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {slideMenu && (
            <svg onClick={hideMenuHandle}
              xmlns="http://www.w3.org/2000/svg"
              className={`${classes.svgIcon} ${classes.active}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
