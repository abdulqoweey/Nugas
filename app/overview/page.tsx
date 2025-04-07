import { ChartData } from '@/components/chart-data'
import Image from 'next/image'

import { MentorsItemsList } from '../components/mentorsComp'
import { UpcomingTasks } from '../components/UpcomingTask'
import OverviewSide from '../components/overviewside'

export default function OverviewPage() {
  return (
    <section className='lg:grid grid-cols-3 space-between '>
      <div className='col-span-2'>
        <div className='flex justify-between place-items-center'>
          <div className=''>
            <h1 className='text-2xl'>Hi, Skylar Dias</h1>
            <p className='text-xs'>Lets finish your task today!</p>
          </div>

          <div className='hidden lg:flex gap-2 place-items-center'>
            <button className='p-4 w-fit h-fit rounded-full border'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5'
                />
              </svg>
            </button>
            <div className='p-3 h-[80px] w-[80px]'>
              <Image
                src='/images/user-image.png'
                alt='User Portrait'
                height={200}
                width={200}
                className='rounded-full border'
              ></Image>
            </div>
          </div>

          {/* Box */}
        </div>
        <div className='text-white lg:flex w-full h-fit  gap-3 my-5'>
          <div className='p-5 lg:w-72 rounded-lg bg-[#141522]'>
            <div>
              <h1>Running Task</h1>
              <h2 className='text-5xl mt-3'>65</h2>
            </div>

            <div className='flex gap-3 place-items-center'>
              <span className='border-r-2 border-r-[#546fff] my-3 p-6 pt-10 border border-opacity-10 rounded-full border-[#546fff] text-2xl'>
                45%
              </span>
              <span className='text-2xl'>
                <p className='font-bold'>100</p>
                <p className='text-[#8e92bc]'>Task</p>
              </span>
            </div>
          </div>
          <div className=' w-full h-fit lg- p-5 rounded-lg  my-5 lg:my-0 text-black bg-[#f5f5f7]'>
            <ChartData />
          </div>
        </div>

        {/* Monthly Mentors Section */}
        <MentorsItemsList />
        <UpcomingTasks />
      </div>

      {/* Second Side */}
      <div className='text-black lg:col-span-1 rounded-lg bg-[#F5F5F7] lg:ml-5 p-3'>
        <OverviewSide />
      </div>
    </section>
  )
}
