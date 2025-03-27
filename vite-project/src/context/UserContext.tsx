import { createContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const updateUser = (user: User) => {
    setUsers((prev) => prev.map((u) => (u.id === user.id ? user : u)));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
