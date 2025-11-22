import { useState, useEffect, type ReactNode } from "react";
import { UserInfoContext } from "./UserInfoContext";
import type { UserInfo } from "./UserInfo";

interface Props {
  children: ReactNode;
}

export const UserInfoProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    currentUser: localStorage.getItem("currentUser"),
    authToken: localStorage.getItem("authToken"),
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setUserInfo({
        currentUser: localStorage.getItem("currentUser"),
        authToken: localStorage.getItem("authToken"),
      });
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <UserInfoContext.Provider value={{ ...userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
