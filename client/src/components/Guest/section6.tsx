import React from 'react';

export class Section6 extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='section section-6'>
          <div className='section-content'>
            <div className="section-6-information">
              <div className="section-6-information-stars">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <div className="section-6-information-name">РАСПОЛОЖЕНИЕ СТУДИЙ</div>
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