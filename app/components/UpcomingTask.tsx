import { User, Star } from 'lucide-react' // Import lucide-react icons
import Image from 'next/image'
// import Link from 'next/link'

const TaskLists = [
  {
    image: '/images/event-bg.jpg', // Path to the local image
    name: 'Curious George',
    designation: 'UIUX Design',
    tasksCompleted: '40 tasks',
    reviews: '4.5(750 reviews)',
    taskicons: 'Icon',
    followstatus: '+Follow',
    dueDate: new Date('2025-10-27'), // Actual Date object
  },

  {
    image: '/images/event-bg1.jpg', // Path to the local image
    name: 'Curious George',
    designation: 'UIUX Design',
    tasksCompleted: '40 tasks',
    reviews: '4.5(750 reviews)',
    taskicons: 'Icon',
    followstatus: 'Followed',
    dueDate: new Date('2025-10-27'), // Actual Date object
  },
]

export function UpcomingTasks() {
  return (
    <div className='h-fit w-full my-5 overflow-hidden'>
      <h1 className='text-3xl font-semibold text-gray-800'>Upcoming Tasks</h1>
      <div className='lg:grid grid-cols-3 gap-6 mt-5 lg:mt-0'>
        {TaskLists.map((task, index) => (
          <div key={index} className='col-span-1 w-full'>
            <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='w-full h-24 bg-black rounded-lg mb-4 relative'>
                <Image
                  src={task.image} // Local image
                  alt={task.name}
                  width={200} height={200}
                  className='rounded-lg'
                />
                <div className='absolute top-2 left-4 text-white font-semibold text-xl'>
                  {task.name}
                </div>
              </div>

              <div className='px-4'>
                <h2 className='font-bold text-xl text-gray-800'>{task.name}</h2>
                <p className='text-xs font-light text-gray-500'>
                  {task.designation}
                </p>
                <div className='mt-2 flex items-center gap-2'>
                  <User size={16} className='text-gray-500' />
                  <span className='text-xs text-gray-500'>
                    {task.tasksCompleted}
                  </span>
                </div>
                <div className='mt-1 flex items-center gap-2'>
                  <Star size={16} className='text-gray-500' />
                  <span className='text-xs text-gray-500'>{task.reviews}</span>
                </div>
              </div>

              <div className='mt-4 flex justify-between items-center'>
                <span className='text-sm text-gray-600'>
                  {new Date(task.dueDate).toLocaleDateString('en-GB')}
                </span>
                <button className='bg-blue-500 text-white py-1 px-4 rounded-md text-sm hover:bg-blue-600 transition duration-200'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
