import React, {useEffect, useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month()) //the current month if have empty dayjs()
    const [smallCalendarMonth, setsmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [showEventModal, setShowEventModal] = useState(false)

    useEffect(()=>{
      if(smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth)
      }

    },[smallCalendarMonth])
  return (
    <GlobalContext.Provider 
    value={{
      monthIndex, 
      setMonthIndex, 
      smallCalendarMonth, 
      setsmallCalendarMonth,
      daySelected,
      setDaySelected,
      showEventModal,
      setShowEventModal
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper