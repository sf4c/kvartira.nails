import React from 'react';

export class Section7 extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='section section-7'>
          <div className='section-content'>
            <div className="section-7-information">
              <div className="section-7-information-stars">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <div className="section-7-information-name">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</div>
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