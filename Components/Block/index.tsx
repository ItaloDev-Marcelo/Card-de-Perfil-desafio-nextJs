
interface SocialBlock {
    socialNum: number,
    tag: string
}

export default function SocialBlock({socialNum,tag}:SocialBlock) {
    return (
        <div>
            <h2 className="font-bold">{socialNum}</h2>
            <p className="text-[0.7em] text-[#6B7280]">{tag}</p>
        </div>
    )
}