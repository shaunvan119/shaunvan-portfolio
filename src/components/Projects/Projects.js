import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';




const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>

    {/*change links and titles for the projects in the constants.js folder, images are in the public folder*/}
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
         <Img src={image}/>
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr/>
         </TitleContent>
         <CardInfo>{description}</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
             {tags.map((tag, i) => (
               <Tag key={i}>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={visit}>source</ExternalLinks>
         </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;