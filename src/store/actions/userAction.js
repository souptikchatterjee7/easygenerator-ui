import { createAction } from "@reduxjs/toolkit";

export const loginUser = createAction("users/login");
export const registerUser = createAction("users/register");
export const getUserProfile = createAction("users/profile");
