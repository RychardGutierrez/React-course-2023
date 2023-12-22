export const setLocalStorage = (storageName, data) => {
  localStorage.setItem(storageName, JSON.stringify(data));
};

export const getLocalStorage = (storageName) => {
  return JSON.parse(localStorage.getItem(storageName));
};
