import React from 'react';

import { MainPanel }      from './components/Guest/mainPanel';
import { MainMenu }       from './components/Guest/mainMenu';
import { SeeImage }       from './components/Guest/seeImage';
import { Authorization }  from './components/Guest/authorization';
import { Registration }   from './components/Guest/registration';
import { Section1 }       from './components/Guest/section1';
import { Section2 }       from './components/Guest/section2';
import { Section3 }       from './components/Guest/section3';
import { Section4 }       from './components/Guest/section4';
import { Section5 }       from './components/Guest/section5';
import { Section6 }       from './components/Guest/section6';
import { Section7 }       from './components/Guest/section7';

export class GuestHome extends React.Component {
  onRender = (): null => {
    
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <MainMenu />
        <SeeImage />
        <Authorization />
        <Registration />

        <Section1 />
        <MainPanel />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />

        { this.onRender() }
      </React.Fragment>
    )
  }
}