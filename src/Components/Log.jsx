import React from 'react';

function Log() {
  return (
    <div className="Log">
      <h1>Log &amp; Goals:</h1>

          <h2>2021</h2>

          <div className="LogCard"> 
            <h3> <span style={{filter: "saturate(0)"}}>✅</span> Complete Client project</h3>
            <p>
              I have a goal by 2/25/'21 to finish a custom CMS software project for a local Theater Company. 
              This project is really just a customized version of my Open Source product, TheaterApp - Built in .NET Core using C# and SQLite.
            </p>
          </div>

          <div className="LogCard"> 
            <h3> <span style={{filter: "saturate(0)"}}>✅</span> Deploy COVID Recoveries Graph to Netlify</h3>
            <p>
              By the 20th of February, I want to deploy to Netlify a weekend project I worked on. This project pulled in data from a COVID API, and displayed the Recoveries and Cases of each country as a graphical representation.
            </p>
          </div>
          
          <div className="LogCard"> 
            <h3>✅ February, Completed IssueTrax project</h3>
            <p>
              Finished work on a full-stack application called IssueTrax. It was built in .NET Core with Entity Framework, C#, and an SQLite database. I'm working on wrapping up a few loose ends before deploying it to Azure. <br/> <br/> If you want to see the code, <a style={{textDecoration: "underline", fontWeight: "bold"}} href="https://github.com/apmcknight/issue-tracker" target="_blank" rel="noreferrer">Launch the Github Repo </a>&nbsp;→
            </p>
          </div>
          
          <div className="LogCard"> 
            <h3>✅ January, Started Spring Semester</h3>
            <p>
              In January, I began my Spring Semester in studying for Computer Science with a focus on Security.
            </p>
          </div>
    
          <p style={{fontStyle: "italic"}}>Log was last updated on: Monday, February 15th at 7:18pm.</p>
    </div>
  );
}

export default Log;