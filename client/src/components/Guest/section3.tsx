import React from 'react';
import $ from 'jquery'
import { log } from 'console';

export class Section3 extends React.Component {
  openWindow = (window: string): void => {
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
  closeWindow = (window: string): void => {
    $(`${window}`).removeClass('cl');
    $(`${window}`).find('.window-content').removeClass('cl');
  }
  changeWindowName = (window: string, name: string): void => {
    $(`${window}`).find(`.window-name`).text(name);
  }

  onRender = () => {
    let $data = {};
    $.ajax({
      url: 'http://localhost:5000/getWorks',
      method: 'post',
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify($data),
      success: res => {
	      for (let i = 0; i < res.length; i++) {
          let type: string = res[i].type;
          let date: string = res[i].date;
          let master: number = res[i].master;
          let service: number = res[i].service;
          let image: string = res[i].image;
          let typeIcon;

          if (type === 'manicure') {
            typeIcon = 'sign_language';
          } else if (type === 'pedicure') {
            typeIcon = 'barefoot';
          }
          
          $(`.section-3-worksList`).append(`
            <div class="section-3-work">
              <div class="section-3-work-image">

              </div>
              <div class="section-3-work-date">
                ${date}
              </div>
              <div class="section-3-work-type">
                <span class="material-symbols-outlined">
                  ${typeIcon}
                </span>
              </div>
            </div>
          `);

          $(`.section-3-worksList`).children().eq(0).find(`.section-3-work-image`).css({"backgroundImage": `url(${image})`});
          $(`.section-3-worksList`).children().eq(0).click(() => {
            this.closeWindow('.window');
            this.changeWindowName('.window-seeImage', `${service}`);
            $(`.window-seeImage`).find(`.seeImage-image`).css({"backgroundImage": `url(${image})`});
            $(`.window-seeImage`).find(`.seeImage-master`).text(`${master}`);
            this.openWindow('.window-seeImage');
          })
        }
      }
    });
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='section section-3'>
          <div className='section-content'>
            <div className="section-3-information">
              <div className="section-3-information-stars">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <div className="section-3-information-name">РАБОТЫ НАШИХ МАСТЕРОВ</div>
            </div>
            <div className="section-3-worksList">
              
            </div>
          </div>
          <div className='section-background'>
            
          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}