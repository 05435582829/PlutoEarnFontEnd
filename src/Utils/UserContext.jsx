import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pre_data, setPredata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userBalance, setUserBalance] = useState(0);
  const [lastTime, setLastTime] = useState();
  const [refCode, setRefCode] = useState("");
  const [task, setTask] = useState(null);

  //   useEffect(() => {
  //     // Fetch user data from API
  //     const fetchUserData = async () => {
  //       try {
  //         const response = await fetch("/api/user"); // Replace with your API endpoint
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch user data");
  //         }
  //         const data = await response.json();
  //         setUser(data);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchUserData();
  //   }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setLoading,
        setError,
        loading,
        error,
        setPredata,
        pre_data,
        userBalance,
        setUserBalance,
        lastTime,
        setLastTime,
        refCode,
        setRefCode,
        task,
        setTask,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
