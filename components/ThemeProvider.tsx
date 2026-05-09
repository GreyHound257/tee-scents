"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We use the standard React ComponentProps for the provider instead of the deep path
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}