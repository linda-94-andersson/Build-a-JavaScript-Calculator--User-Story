import { atom } from "recoil";

export const displayState = atom({
    key: "displayState",
    default: "0",
});

export const operatorState = atom({
    key: "operatorState",
    default: null,
});

export const firstCountState = atom({
    key: "firstCountState",
    default: "",
});