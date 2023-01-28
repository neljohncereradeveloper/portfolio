import { ReactElement } from "react";
import Navigation from "./navigation";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex flex-col h-screen relative pt-[86px]">
      <Navigation />
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
}
