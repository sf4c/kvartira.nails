import React from 'react';
import $ from 'jquery';

export class Registration extends React.Component {
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
        <div className='window window-registration'>
          <div className='window-content'>
            <div className='window-close-button'></div>
            <div className='window-name'>АВТОРИЗАЦИЯ</div>
            <div className='input input-registration-number'>
              <div className='input-placeholder'>Номер телефона</div>
              <div className='input-icon'>
                <span className="material-symbols-outlined">dialpad</span>
              </div>
              <input className='input-field' type='tel' placeholder='888 888 8888' pattern='[0-9]{3} [0-9]{3} [0-9]{4}' maxLength={12} required></input>
            </div>
            <div className='input input-registration-password'>
              <div className='input-placeholder'>Пароль</div>
              <div className='input-icon'>
                <span className="material-symbols-outlined">password</span>
              </div>
              <input className='input-field' type='password'></input>
            </div>
            <div className='input input-registration-password-confirmation'>
              <div className='input-placeholder'>Подтверждение пароля</div>
              <div className='input-icon'>
                <span className="material-symbols-outlined">password</span>
              </div>
              <input className='input-field' type='password'></input>
            </div>
            <div className='registration-authorization-text'>
              Уже есть аккаунт? Вы можете &nbsp;
              <a className='registration-authorization-link'
              onClick={() => {
                this.closeWindow('.window');
                this.openWindow('.window-authorization');
              }}>авторизироваться!</a>
            </div>
            <div className='submit-registration'>ВОЙТИ</div>
          </div>
          <div className='window-background'>

          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}