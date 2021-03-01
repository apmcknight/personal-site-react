import React from 'react';

function Projects() {
  return (
    <div className="Projects">
      <h1>Selected Projects:</h1>

      <a href="/work/covid-graph">
        <div class="projectCard"> 
          <h2>COVID Graph | Web, JavaScript</h2>
          <p>
            A graphical representation of both COVID-19 recoveries, cases, and deaths. Data from The United States, Canada, England, and others were pulled from a COVID-19 API converted JSON. 
            <br/><br/>
            <strong>Click anywhere on the Card to learn more.</strong>
          </p>
        </div>
      </a>

      <a href="/work/issue-trax">
        <div class="projectCard"> 
          <h2>IssueTrax | ASP.NET Core Web</h2>
          <p>
            A graphical representation of both COVID-19 recoveries, cases, and deaths. Data from The United States, Canada, England, and others were pulled from a COVID-19 API converted JSON. 
            <br/><br/>
            <strong>Click anywhere on the Card to learn more.</strong>
          </p>
        </div>
      </a>

      <a href="/work/smarthome-interface">
        <div class="projectCard"> 
          <h2>Smart Home Interface | Mobile / PWA, React, Ionic Framework</h2>
          <p>
            A graphical representation of both COVID-19 recoveries, cases, and deaths. Data from The United States, Canada, England, and others were pulled from a COVID-19 API converted JSON. 
            <br/><br/>
            <strong>Click anywhere on the Card to learn more.</strong>
          </p>
        </div>
      </a>


    </div>
  );
}

export default Projects;