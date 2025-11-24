

import ProfileCard from '@/Components/ProfileCard'
import {Data}from '@/Components/data'
export default function Home() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#6975DD] to-[#7354AE] w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
         {Data.map((data) => (
             <ProfileCard data={data} key={data.id} />
         ))}
      </main>
    </div>
  );
}
