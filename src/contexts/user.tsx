import React from "react";

interface userType {
  name: string;
  email: string;
  password: string;
}
interface UserContextProps {
  users: userType[];
  user: userType | undefined;
  RegisterUser: (name: string, email: string, password: string) => void;
  Login: (email: string, password: string) => userType | void;
}
interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps,
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<userType[]>([]);
  const [user, setUser] = React.useState<userType>();

  const RegisterUser = (name: string, email: string, password: string) => {
    const userList = [...users];
    userList.push({
      name: name,
      email: email,
      password: password,
    });
    setUsers(userList);
  };
  const Login = (email: string, password: string) => {
    const usersList = [...users];
    const userActive = usersList.filter(user => user.email === email && user.password === password);
    if (userActive[0]) {
      setUser(userActive[0]);
    } else {
      alert("Error! User not found");
    }
    return user;
  };
  return (
    <UserContext.Provider
      value={{
        users,
        user,
        RegisterUser,
        Login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
