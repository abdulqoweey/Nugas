'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import React, { useState } from 'react'

// Define mentor item type
type Mentor = {
  id: number
  image: string
  name: string
  designation: string
  tasks: string
  reviews: string
  isFollowed: boolean
}

// Sample mentor data
const initialMentors: Mentor[] = [
  {
    id: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1738091397333-48f0e514b467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8.jpg',
    name: 'Curious George',
    designation: 'UIUX Design',
    tasks: '40 tasks',
    reviews: '4.5(750 reviews)',
    isFollowed: true,
  },
  {
    id: 2,
    image:
      'https://plus.unsplash.com/premium_photo-1738091397333-48f0e514b467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8.jpg',
    name: 'Curious George',
    designation: 'UIUX Design',
    tasks: '40 tasks',
    reviews: '4.5(750 reviews)',
    isFollowed: false,
  },
]

// Component
export function MentorsItemsList(){
  const [mentors, setMentors] = useState<Mentor[]>(initialMentors)

  const toggleFollow = (id: number) => {
    setMentors((prev) =>
      prev.map((mentor) =>
        mentor.id === id
          ? { ...mentor, isFollowed: !mentor.isFollowed }
          : mentor
      )
    )
  }

  return (
    <div className='w-full my-5'>
      <h1 className='text-3xl font-semibold text-gray-800'>Monthly Mentors</h1>
      <div className='mt-5 flex flex-row w-auto gap-6'>
        {mentors.map((mentor) => (
          <div key={mentor.id} className='w-full lg:w-1/2'>
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
                <div className='flex-1'>
                  <h2 className='font-semibold text-xl text-gray-800'>
                    {mentor.name}
                  </h2>
                  <p className='text-xs font-light text-gray-500'>
                    {mentor.designation}
                  </p>
                </div>
                <button
                  onClick={() => toggleFollow(mentor.id)}
                  className={`text-xs font-semibold ${
                    mentor.isFollowed
                      ? 'text-green-600 hover:text-green-700'
                      : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  {mentor.isFollowed ? 'Following' : 'Follow'}
                </button>
              </div>

              {/* Mentor Stats */}
              <div className='flex justify-between items-center text-xs text-gray-600'>
                <p className='flex items-center gap-1'>
                  <Star className='h-4 w-4 text-yellow-500' />
                  {mentor.tasks}
                </p>
                <p className='flex items-center gap-1'>
                  <Star className='h-4 w-4 text-yellow-500' />
                  {mentor.reviews}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
