import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
           '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', 
           '31'
      ],
    };
  }

  render() {
    return (

        <ul className="days">  

          // Loop through each day in month here
            if (day = current) { 
              <li><a href="#" className="active">{this.props.days}</a></li>
            } else  {
              <li><a href="#">{this.props.days}</a></li>
            }
        </ul>

    );
  }

  renderDay(day, index) {
    return <li><a href="#">key={index}>{day}</a></li>;
  }
}
