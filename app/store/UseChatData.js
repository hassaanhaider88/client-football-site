import { createContext, useState } from "react";

export const userChatContext = createContext();

export const useUserChatData = ({ children }) => {
    const [userChatData, setUserChatData] = useState([])
    return (
        <userChatContext.Provider value={{ userChatData, setUserChatData }}>
            {children}</userChatContext.Provider>
    )
}