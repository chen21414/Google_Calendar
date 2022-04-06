import React from 'react'
import Day from './Day'
import { connect } from "react-redux";


const Month = ({month}) => {
  //const { monthIndex } = props;
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day,idx) => (
                    <Day day={day} key={idx} rowIdx={i}/>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    monthIndex: state.monthIndex
  };
};


const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Month);
