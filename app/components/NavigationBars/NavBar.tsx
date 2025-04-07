import { Bell } from 'lucide-react' // Import lucide-react icons
// import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function NavBar() {
  return (
    <div>
      <div className='flex justify-between place-items-center'>
        <h1 className='font-bold'>Explore Mentors</h1>
        <div className='flex gap-3 justify-between'>
          <button className='p-2 rounded-full border'>
            <Bell size={24} />{' '}
            {/* Replaced the SVG with Bell icon from lucide-react */}
          </button>
          <div className='p-2 rounded-full border'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}
