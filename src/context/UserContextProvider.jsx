import UserContext from "./UserContext";
import { useState } from "react";

const UserContextprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextprovider;
