import { createContext } from "react";
import type { UserInfo } from "./UserInfo";

export const UserInfoContext = createContext<UserInfo>({} as UserInfo);