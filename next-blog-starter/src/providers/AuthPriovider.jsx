"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthPriovider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthPriovider;
