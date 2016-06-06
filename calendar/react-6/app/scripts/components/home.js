import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      days: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '5',
        '7'
      ],
    };
  }

  render() {
    return (
      <div className="hero-unit">

        <div className="calendar">
          <div className="month">
            <a href="#" className="back"></a>
            <a href="#" className="next"></a>
            <h5>September</h5>
            <p>2016</p>
          </div>
          <ul className="weekdays">
          {this.state.items.map(this.renderItem)}
          </ul>
        <ul className="days">  
          {this.state.days.map(this.renderDay)}
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

      </div>
    );
  }

  // Render
  renderItem(item, index) {
    return <li key={index}> <span> {item} </span> </li>;
  }
  renderDay(day, index) {
    return <li key={index}> <a href="#"> {day} </a> </li>;
  }

}

