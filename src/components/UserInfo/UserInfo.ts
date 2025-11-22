export interface UserInfo {
  currentUser: string | null;
  authToken: string | null;
  setUserInfo?: React.Dispatch<React.SetStateAction<UserInfo>>;
}
