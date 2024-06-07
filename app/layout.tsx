import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import TaskManagerProvider from "@/components/contexts/TaskManagerProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Manager built in React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TaskManagerProvider>
        <body className={inter.className}>{children}</body>
      </TaskManagerProvider>
    </html>
  );
}
