import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nugas | Task Management",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <div className=''>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
            </main>
            <div className='bg-[#FAFAFA] py-5 px-6 w-full'>
              {children}
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}
