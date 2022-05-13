import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        SLV Developments
      </SectionTitle>
      <SectionText>
        Software Engineering | Frontend Developer | Backend | React Developer | Next js | JavaScript | CSS | HTML | UI/UX
      </SectionText>
      <Button onClick={() => window.location = 'mailto:shaunvan@hotmail.com'}>More info</Button>
    </LeftSection>
  </Section>
);



export default Hero;