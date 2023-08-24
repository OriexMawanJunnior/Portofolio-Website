import Image from 'next/image'
import profile from '../public/image/profile.png'

export default function Home() {
  return (
    <main className='w-full h-full inline-block z-0 bg-white p-32'>
      <div className="flex items-center justify-between w-full">
      <div className='w-1/2 mx-8'>
        <Image src={profile} alt="Oriex" className='w-full h-auto' />
      </div>
      <div className='w-1/2 flex flex-col items-center self-center'>
        <h1 className='font-bold text-8x1 capitalize'>Welcome To my profile website</h1>
        <p className='text-justify'>My name is Oriex Mawan Junnior, a collage student of computer science major, currently interest to learning front end tech</p>
      </div>
    </div>
    </main>
  )
}
