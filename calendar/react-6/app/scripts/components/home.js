import React from 'react';
// import Months from './calendar-months';
// import Days from './calendar-days';


export default class extends React.Component {
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    daysInMonth(7,2016); 

  // constructor(props) {
  //   super(props);
  //   this.state = {
          // days: daysInMonth(7,2016),

          // days: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
          // months: [
          //    'January', 
          //    'February',  
          //    'March',
          //    'May', 
          //    'June',  
          //    'July',
          //    'September', 
          //    'October', 
          //    'November',
          //    'December',
          // ],
          // years: [
          //    past: new Date().getFullYear() -1,
          //    current: new Date().getFullYear(),
          //    '2015', 
          //    '2016',  
          //    '2016',
          // ]
  //   };
  // }

  render() {
    return (
      <div className="calendar">
        // </Months>
        <div className="month">
          <a href="#" className="back"></a>
          <a href="#" className="next"></a>
          <h5>September</h5>
          <p>2016</p>
        </div>
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
        <ul className="days">  
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li><a href="#">7</a></li>
          <li><a href="#">8</a></li>
          <li><a href="#">9</a></li>
          <li><a href="#">10</a></li>
          <li><a href="#">11</a></li>
          <li><a href="#">12</a></li>
          <li><a href="#">13</a></li>
          <li><a href="#">14</a></li>
          <li><a href="#">15</a></li>
          <li><a href="#">16</a></li>
          <li><a href="#">17</a></li>
          <li><a href="#">18</a></li>
          <li><a href="#" className="active">19</a></li>
          <li><a href="#">20</a></li>
          <li><a href="#">21</a></li>
          <li><a href="#">22</a></li>
          <li><a href="#">23</a></li>
          <li><a href="#">24</a></li>
          <li><a href="#">25</a></li>
          <li><a href="#">26</a></li>
          <li><a href="#">27</a></li>
          <li><a href="#">28</a></li>
          <li><a href="#">29</a></li>
          <li><a href="#">30</a></li>
        </ul>
      </div>
    );
  }

  // renderItem(item, index) {
  //   return <li key={index}>{item}</li>;
  // }
}
