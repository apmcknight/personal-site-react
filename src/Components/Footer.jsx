import React from 'react';

function Footer() {
  return (
    <div className="Footer">
      <p style={{fontStyle: "italic", textAlign: "center", paddingBottom: "0px"}}>
        &copy;&nbsp;2021 by Adam McKnight, All Rights Reserved. 
        &nbsp; <a style={{fontWeight: "bold"}} href="https://mcknight.digital">(Developed by McKnight.Digital)</a>
      </p>
      <p style={{fontStyle: "italic", textAlign: "center", paddingBottom: "10px"}}>
          <a style={{marginRight: "10px", fontWeight: "bold"}} href="/legal/">Legal Note</a>
          &ndash; &nbsp;
          <a style={{marginRight: "10px", fontWeight: "bold"}} href="/terms-and-privacy/">Terms of Use &amp; Privacy Terms</a>
      </p>
    </div>

  );
}

export default Footer;