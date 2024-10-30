import React from 'react';
import $ from 'jquery';

export class MainPanel extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  openWindow = (window: string) => {
    $(`${window}`).addClass('cl');
    $(`${window}`).find('.window-content').addClass('cl');
    $(`${window}`).find('.window-background').click(() => {
      $(`${window}`).removeClass('cl');
      $(`${window}`).find('.window-content').removeClass('cl');
    })
    $(`${window}`).find('.window-content').find('.window-close-button').click(() => {
      $(`${window}`).removeClass('cl');
      $(`${window}`).find('.window-content').removeClass('cl');
    })
  }
  closeWindow = (window: string) => {
    $(`${window}`).removeClass('cl');
    $(`${window}`).find('.window-content').removeClass('cl');
  }

  render() {
    return (
      <React.Fragment>
        <div className='mainPanel'>
          <div className='mainPanel-menu-button'>
            <span className="material-symbols-outlined">menu</span>
          </div>
          <div className='mainPanel-authorization-button'
          onClick={() => {
            this.openWindow('.window-authorization');
          }}>
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}