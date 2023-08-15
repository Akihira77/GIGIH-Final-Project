import { CookieType } from "./types";

export const getCookie = (cookieName: string) => {
  const cookie: CookieType = {};
  document.cookie.split(";").forEach(function (el) {
    const [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
};
