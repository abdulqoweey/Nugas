'use client'

import { User, Star } from 'lucide-react'
import Image from 'next/image'

type Task = {
  image: string
  name: string
  designation: string
  tasksCompleted: string
  reviews: string
  followstatus: string
  dueDate: Date
}

const TaskLists: Task[] = [
  {
    image: '/images/event-bg.jpg',
    name: 'Curious George',
    designation: 'UIUX Design',
    tasksCompleted: '40 tasks',
    reviews: '4.5(750 reviews)',
    followstatus: '+Follow',
    dueDate: new Date('2025-10-27'),
  },
  {
    image: '/images/event-bg1.jpg',
    name: 'Sophia Lens',
    designation: 'Graphic Design',
    tasksCompleted: '32 tasks',
    reviews: '4.7(620 reviews)',
    followstatus: 'Followed',
    dueDate: new Date('2025-10-27'),
  },
]

export function UpcomingTasks() {
  return (
    <div className='w-full my-5'>
      <h1 className='text-3xl font-semibold text-gray-800'>Upcoming Tasks</h1>
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {TaskLists.map((task, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
          >
            {/* Image section */}
            <div className='relative w-full h-32 rounded-lg overflow-hidden mb-4'>
              <Image
                src={task.image}
                alt={task.name}
                fill
                className='object-cover'
              />
              <div className='absolute top-2 left-4 text-white font-semibold text-lg drop-shadow'>
                {task.name}
              </div>
            </div>

            {/* Details */}
            <h2 className='font-bold text-xl text-gray-800'>{task.name}</h2>
            <p className='text-xs font-light text-gray-500'>
              {task.designation}
            </p>

            <div className='mt-2 flex items-center gap-2 text-xs text-gray-500'>
              <User size={16} />
              <span>{task.tasksCompleted}</span>
            </div>

            <div className='mt-1 flex items-center gap-2 text-xs text-gray-500'>
              <Star size={16} />
              <span>{task.reviews}</span>
            </div>

            <div className='mt-4 flex justify-between items-center text-sm'>
              <span className='text-gray-600'>
                {task.dueDate.toLocaleDateString('en-GB')}
              </span>
              <button className='bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition duration-200'>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
