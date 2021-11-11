import React from 'react'
import "@lottiefiles/lottie-player";


const CheckLottie = () => {
    return (
        <div>
            <lottie-player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_22g9fjkw.json"
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
