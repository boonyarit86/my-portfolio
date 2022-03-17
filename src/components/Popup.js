import React from "react";
import ReactDom from "react-dom";
import "./Popup.scss";

function Popup(props) {
  return ReactDom.createPortal(
    <div className="popup">
      <div className="popup__box">
        <div
          className={`popup__box-icon popup__box-icon--${
            props.success ? "success" : "error"
          }`}
        >
          <ion-icon
            class="popup__icon"
            name={`${props.success ? "checkmark" : "close"}-outline`}
          ></ion-icon>
        </div>
        <p className="popup__title">{props.success ? "success" : "error"}</p>
        <p className="popup__message">{props.message}</p>
        <button
          className={`popup__btn popup__btn--${
            props.success ? "success" : "error"
          }`}
        >
          ok
        </button>
      </div>
    </div>,
    document.getElementById("popup-hook")
  );
}

export default Popup;
