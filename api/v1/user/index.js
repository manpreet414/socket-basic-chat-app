/*
 * @file: index.js
 * @description: It's combine all user routers.
 * @author: Manpreet Singh
 */

import login from "./login";
import logout from "./logout";
import getOTP from "./get-otp";

export default [
  login,logout,getOTP
];
