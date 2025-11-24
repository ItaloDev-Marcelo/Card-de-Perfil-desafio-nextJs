import Image from 'next/image'

interface ImageProps {
    img: string;
    alt: string;
    width: number;
    className?: string,
    height: number
}

export default function CustomImage({img, alt, width, className, height}:ImageProps ) {
    return <Image  src={img} alt={alt} width={width} quality={80} height={height} className={className} />
}