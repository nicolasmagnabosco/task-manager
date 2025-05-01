import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/styles/globals.css";
import TaskManagerProvider from "@/components/contexts/TaskManagerProvider";
import TaskEditorProvider from "@/components/contexts/TaskEditorProvider";
const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400"] });
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
        <TaskEditorProvider>
          <body suppressHydrationWarning={true} className={kanit.className}>
            {children}
          </body>
        </TaskEditorProvider>
      </TaskManagerProvider>
    </html>
  );
}
