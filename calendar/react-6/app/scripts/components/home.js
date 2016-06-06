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
      ]
    };
  }

  render() {
    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <div className="calendar">
          <ul className="weekdays">
          {this.state.items.map(this.renderItem)}
          </ul>
        </div>

      </div>
    );
  }

  // Render
  renderItem(item, index) {
    return <li key={index}> <span href="#"> {item} </span> </li>;
  }


}

