import React from 'react';

function BlogList() {
  return (
    <div className="Projects">
      <a href="/blog/post/uses">
        <div class="projectCard"> 
          <h2>Uses – about a 10 minute Read</h2>
          <p>
          Inspired by the post made by Wes Boss, I decided to create a /uses page. The following is a curated list of the...     
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

export default BlogList;