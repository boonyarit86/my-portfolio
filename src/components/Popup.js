import React, { useContext } from "react";
import { StateContext } from "../context";
import "./Popup.scss";

function Popup() {
  const action = useContext(StateContext);
  const state = action.popup;

  return (
    <div className="popup popup--close" onClick={action.closePopup}>
      <div className="popup__box">
        <div
          className={`popup__box-icon popup__box-icon--${
            state.isSuccess ? "success" : "error"
          }`}
        >
          <ion-icon
            class={`popup__icon popup__icon--${
              state.isSuccess ? "success" : "error"
            }`}
            name={`${state.isSuccess ? "checkmark" : "close"}-outline`}
          ></ion-icon>
        </div>
        <p className="popup__title">{state.isSuccess ? "success" : "error"}</p>
        <p className="popup__message">{state.message}</p>
        <button
          className={`popup__btn popup__btn--${
            state.isSuccess ? "success" : "error"
          }`}
          onClick={action.closePopup}
        >
          ok
        </button>
      </div>
    </div>
  );
}

export default Popup;
