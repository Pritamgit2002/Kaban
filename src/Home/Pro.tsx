import React from 'react'
import Dashboard from './Dashboard'
import Dashboard1 from './DashBoard1'

type Props = {}

const Pro = (props: Props) => {
  return (
    <div>
        <div className='flex gap-10 '>
            <Dashboard/>
            {/* <Dashboard1/> */}
        </div>
    </div>
  )
}

export default Pro