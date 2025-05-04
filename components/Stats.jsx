"use client"
import CountUp from "react-countup"

const stats = [
    {
        num: 10,
        text: "Month of experience"
    },
    {
        num: 12,
        text: "Projects completed"
    },
    {
        num: 5,
        text: "Technologies mastered"
    },
    {
        num: 500,
        text: "Code commits"
    },
]

const Stats = () => {
    return (
        <div className="flex flex-wrap gap-4 mb-20">
            {stats.map((item, index) => {
                return (
                    <div className="flex-1 flex gap-4 justify-center lg:justify-start items-center" key={index}>
                        <CountUp end={item.num} duration={5} delay={2}
                            className="text-3xl lg:text-4xl font-bold"
                        />
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Stats