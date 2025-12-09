import { useState, useEffect, type ReactNode } from "react";
import { UserInfoContext } from "./UserInfoContext";
import type { UserInfo } from "./UserInfo";

interface Props {
  children: ReactNode;
}

export const UserInfoProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: localStorage.getItem("currentUser"),   // username
    email: localStorage.getItem("email") ?? undefined,  // email
    authToken: localStorage.getItem("authToken"),
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setUserInfo({
        username: localStorage.getItem("currentUser"),
        email: localStorage.getItem("email") ?? undefined,
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
