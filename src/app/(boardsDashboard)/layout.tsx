import { ReactNode } from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavigationBar } from "@/components/header";
import { BoardSidebar } from "@/components/board-dashboard";
import AppProvider from "@/provider/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "boards | EZY Task",
  description: "task management app",
};

export default function BoardsDashboard({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppProvider>
          <NavigationBar />
          <main className="flex items-start gap-4">
            <BoardSidebar />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
