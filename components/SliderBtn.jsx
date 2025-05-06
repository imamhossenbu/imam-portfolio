"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const SliderBtn = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button onClick={() => swiper.slidePrev()} className={btnStyles}>
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button onClick={() => swiper.slideNext()} className={btnStyles}>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    )
}

export default SliderBtn