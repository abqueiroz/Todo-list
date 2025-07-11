import type { ReactNode } from "react";
import  { TodoProvider } from "./TodoProvider";
import { ThemeProvider } from "./ThemeProvider";

interface TestProvidersProps {
  children: ReactNode;
}

export function TestProviders({ children }: TestProvidersProps) {
  return (
    <ThemeProvider>
      <TodoProvider>
        {children}
      </TodoProvider>
    </ThemeProvider>
  );
}