import React from 'react';

export class Section2 extends React.Component {
  onRender = () => {
    
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className='section section-2'>
          <div className='section-content'>
            <div className="section-2-information">
              <div className="section-2-information-stars">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <div className="section-2-information-name">НАШИ НАГРАДЫ И ДОСТИЖЕНИЯ</div>
            </div>
            <div className="achievement">
              <div className="achievement-image-left">
                <span className="achievement-image-icon material-symbols-outlined">diversity_1</span>
              </div>
              <div className="achievement-name-left">БОЛЕЕ 400 КЛИЕНТОВ</div>
              <div className="achievement-description-left">Остались довольны после...</div>
            </div>
            <div className="achievement">
              <div className="achievement-image-right">
                <span className="achievement-image-icon material-symbols-outlined">schedule</span>
              </div>
              <div className="achievement-name-right">УЖЕ 4 ГОДА</div>
              <div className="achievement-description-right">Мы помогаем...</div>
            </div>
            <div className="achievement">
              <div className="achievement-image-left">
                <span className="achievement-image-icon material-symbols-outlined">health_and_beauty</span>
              </div>
              <div className="achievement-name-left">СОВРЕМЕННЫЕ ПРИБОРЫ И СРЕДСТВА</div>
              <div className="achievement-description-left">Используются всеми мастерами нашего салона...</div>
            </div>
            <div className="achievement">
              <div className="achievement-image-right">
                <span className="achievement-image-icon material-symbols-outlined">demography</span>
              </div>
              <div className="achievement-name-right">НАШИ МАСТЕРЫ ЯЛВЯЮТСЯ ЭКСПЕРТАМИ</div>
              <div className="achievement-description-right">В области своего дела...</div>
            </div>
            <div className="achievement-center">
              <div className="achievement-image-center">
                <span className="achievement-image-icon material-symbols-outlined">high_quality</span>
              </div>
              <div className="achievement-name-center">МЫ ОТВЕЧАЕМ ЗА КАЧЕСТВО НАШИХ УСЛУГ</div>
              <div className="achievement-description-center">...</div>
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