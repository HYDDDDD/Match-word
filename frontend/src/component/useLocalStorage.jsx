import React from "react";

export const useLocalStorage = (name) => {
  //provides 2 services.

  //save data.
  const setLocalStorage = async (item) => {
    try {
      const data = JSON.stringify(item);
      await localStorage.setItem(name, data);
    } catch (error) {}
  };

  //remove localstorage.
  const removeLocalStorage = async () => {
    return await localStorage.removeItem(name);
  };

  return [setLocalStorage, removeLocalStorage];
};
