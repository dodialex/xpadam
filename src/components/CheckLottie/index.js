import React from 'react'
import "@lottiefiles/lottie-player";


const CheckLottie = () => {
    return (
        <div>
            <lottie-player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_mm5m9lvn.json"
                style={lottie}
            >
            </lottie-player>
        </div>
    )
}

export default CheckLottie;
const lottie = {
    width: '30px',
    marginTop: '-15px'
}
