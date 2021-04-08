import { createContext, ReactNode, useState } from "react";

interface NavigatorContextData {
    widthNavigator: string;
    handleNavigator: () => void;
}

interface NavigatorProviderProps {
    children: ReactNode;
}

export const NavigatorContext = createContext({} as NavigatorContextData)

export function NavigatorProvider({ children }: NavigatorProviderProps) {
    const [widthNavigator, setWidthNavigator] = useState("300px")

    function handleNavigator() {
        if (widthNavigator === "65px") {
            setWidthNavigator("300px")
        } else {
            setWidthNavigator("65px")
        }
    }

    return (
        <NavigatorContext.Provider value={{
            widthNavigator,
            handleNavigator
        }}>
            { children }
        </NavigatorContext.Provider>
    )
}
