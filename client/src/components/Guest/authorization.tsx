import React from 'react';
import $ from 'jquery';
import { render } from '@testing-library/react';

export class Authorization extends React.Component {
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
  
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='window window-authorization'>
          <div className='window-content'>
            <div className='window-close-button'></div>
            <div className='window-name'>АВТОРИЗАЦИЯ</div>
            <div className='input input-authorization-number'>
              <div className='input-placeholder'>Номер телефона</div>
              <div className='input-icon'>
                <span className="material-symbols-outlined">dialpad</span>
              </div>
              <input className='input-field' type='tel' placeholder='888 888 8888' pattern='[0-9]{3} [0-9]{3} [0-9]{4}' maxLength={12} required></input>
            </div>
            <div className='input input-authorization-password'>
              <div className='input-placeholder'>Пароль</div>
              <div className='input-icon'>
                <span className="material-symbols-outlined">password</span>
              </div>
              <input className='input-field' type='password'></input>
            </div>
            <div className='authorization-registration-text'>
              Ещё не успели создать аккаунт? &nbsp;
              <a className='authorization-registration-link'
              onClick={() => {
                this.closeWindow('.window');
                this.openWindow('.window-');
              }}>Самое время зарегистрироваться!</a>
            </div>
            <div className='submit-authorization'>ВОЙТИ</div>
          </div>
          <div className='window-background'>

          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}