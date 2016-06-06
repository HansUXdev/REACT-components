import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      months: [
         'January', 
         'February',  
         'March',
         'May', 
         'June',  
         'July',
         'September', 
         'October', 
         'November',
         'December',
      ],
      years: [
         '2015', 
         '2016',  
         '2016',
      ]
    };
  }

  render() {
    return (

        <div className="month">
          // clicking either should change the month title
          <a href="#" className="back"></a>
          <a href="#" className="next"></a>

          // {this.state.months.map(this.renderMonths)
          <h5>September</h5>
          
          // {this.state.year.map(this.renderItem)
          <p>2014</p>
        </div>

    );
  }

  renderMonth(month, index) {
    return <li key={index}>{month}</li>;
  }

  renderYear(year, index) {
    return <li key={index} > {year} </li>;
  }

}
