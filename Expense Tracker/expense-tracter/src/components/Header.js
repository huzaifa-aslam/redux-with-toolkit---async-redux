import React from 'react'
import cx from 'classnames'
import './components.css'
import Typing from 'react-typing-animation';

import useWebAnimations,{rubberBand} from "@wellyshen/use-web-animations";
export const Header = () => {
    const { ref, playState,getAnimation } = useWebAnimations({...rubberBand
    });

    return (
        <div  className={cx('tc','pa2','bgWhite','br4','ph3','pv1')}>
            <Typing><h3>Developed By<br/> Huzaifa Aslam</h3></Typing>
        </div>
    )
}
