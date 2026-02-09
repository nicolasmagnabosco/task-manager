import type { Metadata } from "next";
import "@/styles/globals.css";
import TaskManagerProvider from "@/components/contexts/TaskManagerProvider";
import TaskEditorProvider from "@/components/contexts/TaskEditorProvider";
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
          <body suppressHydrationWarning={true}>{children}</body>
        </TaskEditorProvider>
      </TaskManagerProvider>
    </html>
  );
}
