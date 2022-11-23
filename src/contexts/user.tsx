import React from "react";

interface userType {
  name: string;
  email: string;
  password: string;
}
interface UserContextProps {
  users: userType[];
  user: userType;
  RegisterUser: (name: string, email: string, password: string) => boolean;
  Login: (email: string, password: string) => boolean;
}
interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps,
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<userType[]>([]);
  const [user, setUser] = React.useState<userType>({name: "", email: "", password: ""});

  const RegisterUser = (name: string, email: string, password: string) => {
    const userList = [...users];
    const inside = userList.some(item => item.email === email);
    if(inside) {
      alert("Email already registered");
      return false;
    }
    userList.push({
      name: name,
      email: email,
      password: password,
    });
    setUsers(userList);
    return true;
  };
  const Login = (email: string, password: string) => {
    const usersList = [...users];
    const userActive = usersList.filter(user => user.email === email && user.password === password);
    if (userActive[0]) {
      setUser(userActive[0]);
      return true;
    } else {
      alert("Error! User not found");
      return false;
    }
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
