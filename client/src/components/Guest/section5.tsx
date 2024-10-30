import React from 'react';

export class Section5 extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='section section-5'>
          <div className='section-content'>
            <div className="section-5-information">
              <div className="section-5-information-stars">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <div className="section-5-information-name">МАСТЕРЫ ПЕДИКЮРА</div>
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