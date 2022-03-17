import { createContext, useState } from "react";

export const StateContext = createContext({
    isMenuOpened: false,
    isLoading: false,
    onClickMenu: () => {},
    handleLoading: () => {}
})

export const useStateContext = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickMenu = () => {
        setIsMenuOpened(prev => !prev);
    }

    const handleLoading = () => {
        setIsLoading(prev => !prev)
    }

    return { isMenuOpened, onClickMenu, isLoading, handleLoading }
}