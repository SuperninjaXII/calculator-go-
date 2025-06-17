export const $ = (elem) => {
  return document.querySelector(elem);
};
//this is a helper function to get values from input
export const getValues = () => {
  return localStorage.getItem("input") || "";
};
export const setValues = (data) => {
  localStorage.setItem("input", data);
};
