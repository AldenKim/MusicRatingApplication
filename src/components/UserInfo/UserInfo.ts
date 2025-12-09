export interface UserInfo {
  username: string | null;
  email: string | undefined;
  authToken: string | null;
  setUserInfo?: React.Dispatch<React.SetStateAction<UserInfo>>;
}
