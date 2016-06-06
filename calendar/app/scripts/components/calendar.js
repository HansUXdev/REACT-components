import React from 'react';

export default class extends React.Component {


  render() {
    return (
      <div className="calendar">
        </Months>
        

        <ul className="weekdays">
          <li><span href="#">Sun</span></li>
          <li><span href="#">Mon</span></li>
          <li><span href="#">Tue</span></li>
          <li><span href="#">Wed</span></li>
          <li><span href="#">Thu</span></li>
          <li><span href="#">Fri</span></li>
          <li><span href="#">Sat</span></li>
        </ul>
        
        // </Days>

      </div>
    );
  }

  // renderItem(item, index) {
  //   return <li key={index}>{item}</li>;
  // }
}
