import React, {useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month()) //the current month if have empty dayjs()
  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper