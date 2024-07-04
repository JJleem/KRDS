import { atom } from "recoil";

export const toggleState = atom({
  key: "toggle",
  default: false,
});

export const pathState = atom({
  key: "path",
  default: false,
});
