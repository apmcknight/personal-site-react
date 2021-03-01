import React from 'react';

function Recent() {
  return (
    <div className="Recent">
      <h1>Recent:</h1>

      {/* The recent section should only have no more than 3 cards at any given time. */}

      <a href="/blog/post/move-over-apple">
        <div class="recentCard"> 
          <h3>NEW | Posted Febuary 27th</h3>
          <h2>Blog Post: Move over Apple, why I switched to Windows.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti totam vitae deserunt omnis odio 
          </p>
        </div>
      </a>

      <a href="/work/covid-graph">
        <div class="recentCard"> 
        <h2>COVID Graph | Web, JavaScript</h2>
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

export default Recent;