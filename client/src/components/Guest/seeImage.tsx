import React from 'react';
import $ from 'jquery';
import { render } from '@testing-library/react';

export class SeeImage extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='window window-seeImage'>
          <div className='window-content'>
            <div className='window-close-button'></div>
            <div className='window-name'></div>
            <div className="seeImage-image"></div>
            <div className="seeImage-master"></div>
          </div>
          <div className='window-background'>

          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}