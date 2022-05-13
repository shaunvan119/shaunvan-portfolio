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
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/shaun-van-amersfoort-80b7b7194/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;