import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { NavigationBar } from "@/components/header";
import { Sidebar } from "@/components/ws-Dashboard";
import AppProvider from "@/provider/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Manage your daily tasks using this amazing app",
  description: "The best task management app in the world <:)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body className={poppins.className}>
          <NavigationBar />
          <main className="flex items-start mt-14 gap-8">
            <div>
              <Sidebar />
            </div>
            {children}
          </main>
        </body>
      </AppProvider>
    </html>
  );
}
