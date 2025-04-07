import { Calendar, Home, Inbox, Search, Settings,} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Image from 'next/image'

// Menu items.
const items = [
  {
    title: 'Overview',
    url: 'overview',
    icon: Home,
  },
  {
    title: 'Task',
    url: 'task',
    icon: Inbox,
  },
  {
    title: 'Mentor',
    url: 'mentor',
    icon: Calendar,
  },
  {
    title: 'Message',
    url: 'message',
    icon: Search,
  },
  {
    title: 'Settings',
    url: 'settings',
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className='bg-[#FFFFFF] md:p-10'>
        <Image
          src='/images/Logo.svg'
          alt='Nugas Logo'
          height={100}
          width={200}
          className=''
        ></Image>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className='my-2'>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className='flex gap-5'>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
