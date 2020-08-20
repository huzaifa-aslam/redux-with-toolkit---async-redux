import React from 'react'
import CountUp from 'react-countup'
import './components.css'
import cx from 'classnames'


export const CurrentBalance = ({currentBlnce}) => {

    return (
        <div className={cx('tc','bgHeader','mv2','br4','textWhite')} >
            <h3>Your Balance</h3>
            <h2>$<CountUp start={0} end={currentBlnce} duration={2.5} separator=","/></h2>

        </div>
    )
}
