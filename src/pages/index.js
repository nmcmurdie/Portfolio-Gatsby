import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../layouts/Header'
import TitleSection from '../layouts/sections/TitleSection'
import AboutSection from '../layouts/sections/AboutSection'
import ProjectsSection from '../layouts/sections/ProjectsSection';
import FooterSection from '../layouts/sections/FooterSection';
import '@fontsource/open-sans'
import '@fontsource/roboto'
import './index.css';


function App() {  
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Nick McMurdie's Web Portfolio"
        />
        <title>Portfolio</title>
      </Helmet>
      <Header />
      <main>
        <TitleSection />
        <AboutSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
