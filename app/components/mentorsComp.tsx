import Image from 'next/image'
import Link from 'next/link'
import { FaUser, FaStar } from 'react-icons/fa'; // Importing the Font Awesome User icon

const MentorsItems = [
  

{
  image:
    'https://plus.unsplash.com/premium_photo-1738091397333-48f0e514b467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8.jpg',
  name: 'Curious George',
  designation: 'UIUX Design',
  tasks: '40 tasks',
  reviews: '4.5(750 reviews)',
  taskicons: <FaStar />, // Using the Font Awesome User icon
  followstatus: 'Followed',
},


  {
    image:
      'https://plus.unsplash.com/premium_photo-1738091397333-48f0e514b467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8.jpg',
    name: 'Curious George',
    designation: 'UIUX Design',
    tasks: '40 tasks',
    reviews: '4.5(750 reviews)',
    taskicons: <FaStar />,
    followstatus: 'Followed',
  },
]

export function MentorsItemsList() {
  return (
    <div className='h-fit w-full my-5'>
      <h1 className='text-3xl font-semibold text-gray-800'>Monthly Mentors</h1>
      <div className='mt-5 flex flex-row gap-6'>
        {MentorsItems.map((mentors, index) => (
          <div key={index} className='w-full lg:w-1/2'>
          
            {/* Each card takes 50% width on larger screens */}
            <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              {/* Mentor Image and Info */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='h-16 w-16'>
                  <Image
                    src='/images/dom-image.png'
                    alt='User Portrait'
                    height={64}
                    width={64}
                    className='p-1 rounded-full border'
                  />
                </div>
                <div>
                  <h2 className='font-semibold text-xl text-gray-800'>
                    {mentors.name}
                  </h2>
                  <p className='text-xs font-light text-gray-500'>
                    {mentors.designation}
                  </p>
                </div>
                <button className='text-xs font-semibold text-blue-500 hover:text-blue-600'>
                  {mentors.followstatus}
                </button>
              </div>

              {/* Mentor Stats */}
              <div className='flex justify-between items-center text-xs text-gray-600'>
                <p>
                  <span className='font-semibold'>{mentors.taskicons}</span>
                  {mentors.tasks}
                </p>
                <p>
                  <span className='font-semibold'>{mentors.taskicons}</span>
                  {mentors.reviews}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
