import { createContext, useState } from "react";

export const StateContext = createContext({
    isMenuOpened: false,
    isLoading: false,
    popup: {},
    onClickMenu: () => {},
    handleLoading: () => {},
    openPopup: () => {},
    closePopup: () => {}

})

export const useStateContext = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [popup, setPopup] = useState({isSuccess: null, message: ""});

    const onClickMenu = () => {
        setIsMenuOpened(prev => !prev);
    }

    const handleLoading = () => {
        setIsLoading(prev => !prev)
    }

    const openPopup = (data) => {
        let popupEl = document.querySelector(".popup");
        popupEl.classList.remove("popup--close");
        popupEl.classList.add("popup--open");
        setPopup(data);
    }

    const closePopup = () => {
        let popupEl = document.querySelector(".popup");
        popupEl.classList.remove("popup--open");
        popupEl.classList.add("popup--close");
    }

    return { isMenuOpened, onClickMenu, isLoading, handleLoading, openPopup, closePopup, popup }
}