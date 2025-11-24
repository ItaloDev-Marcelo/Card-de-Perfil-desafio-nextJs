'use client'
import CustomImage from '@/Components/Image'

export interface ButtonProps {
   activeStyle: string,
   handleClick?: () => void,
   addStyle?: string, 
   img: string, 
   alt: string,
   width: number,
   className: string,
   name: string,
   type: number
}

export default function Button({activeStyle,handleClick, addStyle, img, alt, width, className, name, type}:ButtonProps) {
    return (
      <>
      {type == 1 ? 
      <button className={`w-28 h-9 flex items-center justify-center cursor-pointer rounded-lg ${activeStyle} ${addStyle}`} onClick={handleClick}>
       <CustomImage img={img} height={100} alt={alt} width={width} className={className} /> <span className='pl-2.5'>{name}</span>
    </button> : <button className={`w-28 h-9  flex items-center cursor-pointer justify-center rounded-lg  ${activeStyle} ${addStyle}`}>
       <CustomImage img={img} height={100} alt={alt} width={width} className={className} />  <span className='pl-2.5'>{name}</span>
    </button>}
      </>
    )
}