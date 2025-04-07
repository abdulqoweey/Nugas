'use client'
import * as React from 'react'
// import Image from 'next/image'
import { Calendar } from '@/components/ui/calendar'




export default function OverviewSide() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border'
    />
  )
}
