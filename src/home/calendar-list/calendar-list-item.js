import React from "react";

const Calendar = () => {
  return(
      <div>
        <a href="#" className="btn rounded-5 bg-light" style={{listStyleType: 'none'}}>
          <span style={{fontFamily: 'Seravek', fontSize: '20px'}}>log in</span>
        </a>
        <a href="#" className="btn rounded-5 bg-light" style={{listStyleType: 'none'}}>
          <span style={{fontFamily: 'Seravek', fontSize: '20px'}}>Sign in</span>
        </a>
        <div className="fw-bold" style={{color: "red", fontSize: '35px'}}>Add calendar later</div>
      </div>

  );
}
export default Calendar;