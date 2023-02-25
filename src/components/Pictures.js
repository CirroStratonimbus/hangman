import React, { useSelector } from "react";

import statePic1 from './pictures/state1.GIF'
import statePic2 from './pictures/state2.GIF'
import statePic3 from './pictures/state3.GIF'
import statePic4 from './pictures/state4.GIF'
import statePic5 from './pictures/state5.GIF'

// pictures according to current game progress
function Pictures () {
    const wrongGuesses = useSelector(state => state.wrongGuesses);

    switch(wrongGuesses) {
        case 0:
            return statePic1
            break;
        case 1:
            return statePic2
            break;
        case 2:
            return statePic3
            break;
        case 3:
            return statePic4
            break;
        case 4:
            return statePic5
            break;
    }

    // return currentPic
}

export default Pictures;