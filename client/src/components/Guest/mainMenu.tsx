import React from 'react';

export class MainMenu extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='mainMenu'></div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}