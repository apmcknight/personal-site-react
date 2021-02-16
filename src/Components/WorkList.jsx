import React from 'react';

function WorkList() {
  return (
    <div className="Projects">
      <a href="/">
        <div class="projectCard"> 
          <h2>Project Title | Tag</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti totam vitae deserunt omnis odio 
          </p>
        </div>
      </a>
      <a href="/">
        <div class="projectCard"> 
          <h2>Project Title 2 | Tag</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti totam vitae deserunt omnis odio 
          </p>
        </div>
      </a>
      <a href="/">
        <div class="projectCard"> 
          <h2>Project Title 3 | Tag</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti totam vitae deserunt omnis odio 
          </p>
        </div>
      </a>
    </div>
  );
}

export default WorkList;