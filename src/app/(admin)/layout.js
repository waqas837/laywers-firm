import AdminSidebar from "@/components/AdminComponents/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <AdminSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
