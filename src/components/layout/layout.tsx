import React, { ReactNode } from "react";
import clsx from "clsx";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

function Layout({ className, children }: LayoutProps) {
  return (
    <div className={clsx("max-w-_1440 mx-auto", className)}>{children}</div>
  );
}

export default Layout;
