
import Image from 'next/image'
import Link from 'next/link'
import { Home, List, User, MessageCircle, Settings } from 'lucide-react'

const NavLinks = [
  {
    title: 'Overview',
    description: 'Overview page',
    path: '/',
    icon: <Home size={24} />,
  },
  {
    title: 'Task',
    description: 'Task page',
    path: '/overView',
    icon: <List size={24} />,
  },
  {
    title: 'Mentor',
    description: 'Mentor page',
    path: '#mentor',
    icon: <User size={24} />,
  },
  {
    title: 'Message',
    description: 'Message page',
    path: '#message',
    icon: <MessageCircle size={24} />,
  },
  {
    title: 'Settings',
    description: 'Settings page',
    path: '#settings',
    icon: <Settings size={24} />,
  },
]

export default function SideBar() {
  // const [SideBarOpen, setSideBarOpen] = useState(false)
  // const ToggleSideBar = () => setSideBarOpen(!SideBarOpen)

  return (
    // Desktop View
    <div>
      <div className=''>
        <Link href='/'>
          <Image
            src='/images/Logo.svg'
            alt='Nugas Logo'
            height={100}
            width={200}
          />
        </Link>
      </div>

      <div className='p-10'>
        <ul>
          {NavLinks.map((link, index) => (
            <li
              key={index}
              className='font-light text-[#8e93d4] my-5 text-xs hover:text-[#1e1e4a]'
            >
              <Link
                href={link.path}
                className='flex flex-row gap-3 place-items-center'
              >
                <span>{link.icon}</span>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>This is the last Item</div>
    </div>
  )
}
