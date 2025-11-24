'use client'
import CustomImage from '@/Components/Image';
import SocialBlock from '@/Components/Block'
import Button from '@/Components/Button'
import { useState } from 'react';
interface social {
    title: string, numbers: number
}


interface ProfileCard {
        id: number,
        img: string,
        name: string,
        cargo: string,
        social: social[],
        bio: string
}

interface ProfileData {
    data: ProfileCard
}




export default function ProfileCard({data}:ProfileData) {


    const [follow, setFollow] = useState(false)

    const handleClick = () => setFollow(!follow)

    const change = follow ? '/check-solid.svg' : '/user-regular.svg'
    const active = 'bg-[#10B981] shadow-lg shadow-green-500/50 transition delay-150 duration-300 ease-in-out'
    const normal = 'bg-gradient-to-r from-[#6975DD] to-[#7354AE] shadow-lg shadow-purple-500/50 transition delay-150 duration-300 ease-in-out '
    const buttonStyle = !follow ? normal : active
    const buttonText = !follow ? 'Seguir' : 'Seguindo'

    return (
         <div className="w-80 h-107 rounded-lg bg-white xl:w-85 xl:scale-110 ">
            <div className='w-full h-1/4 bg-[#0000001A] rounded-t-md flex flex-col items-center cursor-pointer'>
                <figure className='mt-10 scale-90 p-1 rounded-[50%] border-4 border-[#7354AE]'>
                    <CustomImage img={data.img} alt='Profile photo' width={100} height={100} 
                    className='rounded-[50%]  hover:border-2' />
                </figure>
                <section className='text-center mb-2.5'>
                      <h1 className='font-bold my-1.5 '>{data.name}</h1>
                      <p className='text-[0.7em] text-[#6B7280] my-2'>{data.cargo} </p>
                      <div className='flex flex-row items-center justify-between  w-50 mt-4'>
                         <SocialBlock socialNum={follow ? data.social[0].numbers + 1 : data.social[0].numbers} tag={data.social[0].title}
                          key={data.social[0].title} /> 
                          <SocialBlock socialNum={data.social[1].numbers} tag={data.social[1].title}
                          key={data.social[1].title} /> 
                          <SocialBlock socialNum={data.social[2].numbers} tag={data.social[2].title}
                          key={data.social[2].title} /> 
                      </div>
                </section>
                <div>
                    <div className='flex flex-row items-center justify-between px-10 my-7 xl:px-13 '>
                      <Button activeStyle='hover:opacity-75 text-white' handleClick={handleClick}
                     addStyle={`${buttonStyle} text-[0.7em]`} img={change} alt='' width={12}
                     className='' name={buttonText} type={1} />
                     <Button activeStyle='hover:opacity-75 text-black' handleClick={handleClick}
                     addStyle='bg-[#0000001A] text-[0.7em]' img='/envelope-regular.svg' alt='' width={14}
                     className='' name='Message' type={2} />
                    </div>
                     <div className='px-5.5 mt-5'>
                        <h3 className='text-[0.7em] text-[#6B7280] text-center'>{data.bio}</h3> 
                     </div>
                </div>
            </div>
         </div>
    )
}