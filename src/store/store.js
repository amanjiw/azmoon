import React, { useContext, useReducer } from "react";

const Store = React.createContext({
  slideMenu: false,
  modal: false,
  formInfo: {
    username: "",
    password: "",
    email: "",
  },
  showMenu: () => {},
  hideMenu: () => {},
  getFormInfo: () => {},
  activeModal: () => {},
  hideModal: () => {},
});

const initialState = {
  slideMenu: false,
  modal: false,
  formInfo: {
    username: "",
    password: "",
    email: "",
  },
};

const storeReducer = (state, action) => {
  if (action.type === "SHOW_MENU") return { ...state, slideMenu: true };
  if (action.type === "HIDE_MENU") return { ...state, slideMenu: false };
  if (action.type === "GET_FORM-INFO")
    return {
      ...state,
      formInfo: {
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
      },
    };

  if (action.type === "SHOW_MODAL") return { ...state, modal: true };
  if (action.type === "HIDE_MODAL") return { ...state, modal: false };
};

const StoreProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(storeReducer, initialState);

  const showMenu = () => {
    dispatchState({ type: "SHOW_MENU" });
  };

  const hideMenu = () => {
    dispatchState({ type: "HIDE_MENU" });
  };

  const getFormInfo = (data) => {
    dispatchState({ type: "GET_FORM-INFO", payload: data });
  };

  const activeModal = () => {
    dispatchState({ type: "SHOW_MODAL" });
  };

  const hideModal = () => {
    dispatchState({ type: "HIDE_MODAL" });
  };

  return (
    <Store.Provider
      value={{
        ...state,
        showMenu,
        hideModal,
        getFormInfo,
        activeModal,
        hideMenu,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default StoreProvider;

export const useStoreContext = () => {
  return useContext(Store);
};
