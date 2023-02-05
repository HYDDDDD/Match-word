import React, { useState } from "react";

export const useLocalStorage = (name) => {
  // console.log(name);
  //provides 2 services.
  const getLocalStorage = async () => {
    try {
      const local = await localStorage.getItem(name);
      console.log(local);
      if (local) {
        // await setData(JSON.parse(local));
        return JSON.parse(local);
      }
    } catch (error) {
      return undefined;
    }
  };

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

  return [getLocalStorage, setLocalStorage, removeLocalStorage];
};
