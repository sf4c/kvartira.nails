import React from 'react';

export class Section1 extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='section section-1'>
          <div className='section-content'>
            <div className='section-1-brandLogo'></div>
            <div className='section-1-brandName'>КВARTИРА <span style={{"color": "rgb(200, 200, 200)"}}> .nails</span></div>
            <div className='section-1-decorationLine'></div>
            <div className='section-1-brandDescription'>Профессиональная студия маникюра в г. Благовещенске</div>
            <div className='section-1-bottomArrow'></div>
          </div>
          <div className='section-background section-background-1'>

          </div>
        </div>

        { this.onRender() }
      </React.Fragment>
    )
  }
}