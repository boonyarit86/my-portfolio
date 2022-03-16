import { createContext, useState } from "react";

export const StateContext = createContext({
    isMenuOpened: false,
    onClickMenu: () => {}
})

export const useStateContext = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const onClickMenu = () => {
        setIsMenuOpened(prev => !prev);
    }

    return { isMenuOpened, onClickMenu }
}