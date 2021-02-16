import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Uses() {
  return (
    <div className="Uses">
      <Navbar />
      <p style={{marginBottom: "20px"}}>Posted On: Monday Feb 15th, 2021</p>
      <button className="TagButton">EDC</button>

      {/* THIS SHOULD BE USED AS THE LAST BUTTON IN THE LIST */}
      <button style={{marginLeft: "15px", marginRight: "15px", marginBottom: "30px"}} className="TagButton">Misc</button>

      {/* CONTENT BEGINS HERE */}
      <h1 style={{fontWeight: "bold"}}>Uses</h1>
      <div className="ContentParagrpah">
        <p>Inspired by the post made by Wes Boss, I decided to create a /uses page. The following is a curated list of the Hardware, Software, Tools, and EDC that I use to get my job done. I use both tools for Software Development and Network Engineering.</p>
        
        <h2>Hardware</h2>
        <ul>
          <li>
            <strong>Laptop:</strong> Mid-2015, MacBook Pro 15”, Core i7 16GB DDR3 RAM, 256GB SSD (running a combo of
            MacOS, Windows, and Kali Linux).
          </li>
          <li><strong>Mobile:</strong> Both the iPhone 12, and the Google Pixel 4 (running Graphene).</li>
          <li><strong>Headphones of Choice:</strong> Apple AirPods Pro; Gen 1</li>
          <li><strong>Misc:</strong> Solo Key (the Secure Version) - USB 2FA Key</li>
        </ul>

        <h2>Software</h2>
        <ul>
          <li><strong>Text Editor:</strong> Neovim or Code (depending on my feeling)</li>
          <li><strong>Terminal Emulator:</strong> Hyper or the Stock Term. (depending on OS)</li>
          <li><strong>Password Vault:</strong> LassPass (I know, it’s bad, but I can’t be bothered to migrate right
            now.)</li>
          <li><strong>Browser:</strong> Brave as primary, all others for Web Testing</li>
          <li><strong>VPN:</strong> Right now, I’m using my own VPN Config that’s running behind my own network through
            a UniFi Security Gateway and RP.</li>
          <li><strong>Notes:</strong> Notion, hands down.</li>
          <li><strong>Music:</strong> Tidal. I don’t think I’ll leave for any other service — HiFi is amazing, if your
            an auto-head (like me),</li>
        </ul>
        <h2>Production Servers</h2>
        <p>For production applications that require a backend and or severs, I use the following VPS providers;</p>
        <ul>
          <li>Digital Ocean</li>
          <li>AWS</li>
          <li>GoDaddy VPS</li>
        </ul>
        <p><strong>The stack that’s used majority of the time is:</strong></p>
        <ul>
          <li>Ubuntu, LTS</li>
          <li>Node</li>
          <li>Custom Ghost CMS Deployment</li>
        </ul>

        <h2>Home Network</h2>
        <ul>
          <li><strong>Primary ISP:</strong> Century Link, Dedicated Residential Fiber 1gig up &#x26; down.</li>
          <li><strong>Back Up ISP:</strong> Charter/Spectrum; Standard 200 mbps</li>
          <li><strong>Switch:</strong> UniFi 24-port POE Switch, V-LAN for dedicated ethernet traffic and IOT Devices
            running within the home to keep them isolated (as much as they can) from attacks.</li>
          <li><strong>AP’s:</strong> UniFi Nano HD’s (4 of them to cover my whole property with internet.)</li>
          <li><strong>Security:</strong> UniFi Security Gateway</li>
          <li><strong>Automation:</strong> A RP, Running Ansible. </li>
        </ul>

        <h2>IOT Devices</h2>
        <ul>
          <li>Philips Hue Lighting</li>
          <li>Apple HomePod <em>(Yes, it could be smarter - but it sounds so good!)</em></li>
          <li>Google Nest Mini (x4)</li>
          <li>Google Nest Hub (x2)</li>
          <li>Google Chromecast with Google TV (x2)</li>
          <li>Wyze Sense</li>
        </ul>

        <h2>Every Day Carry</h2>
        <ul>
          <li><strong>Backpack:</strong> For my backpack, I carry a custom The North Face pack that was created with my
            own branding. It’s large enough to carry all my gear and 2-days worth of clothing. (Remember the good, old
            days, when we could travel?)</li>
          <li><strong>Water Bottle:</strong> Navy Yetti Rambler with Chug Cap</li>
          <li><strong>Smartwatch:</strong> Army Green, Amazfit T-Rex</li>
          <li><strong>Smartphone:</strong> iPhone 12 &#x26; Pixel 4a</li>
          <li><strong>Shoes:</strong> Nike Men’s Revolution, Black/Grey, Underarmour Tactical Boots, Sparys, or Yeezy
            Boost 350 Clay.</li>
          <li><strong>Wallet:</strong> A plain leather wallet I bought off Amazon for $15</li>
          <li><strong>Checking:</strong> Charles Schwab Investor Checking. I switched from Chase Private Client after
            they started to charge for Savings transfers over 6 per-month.</li>
          <li>
            <p><strong>Credit Cards:</strong> </p>
            <ul>
              <li>Starbucks Rewards Visa Card</li>
              <li>AMEX Platinum Card</li>
              <li>Amazon Prime &#x26; Prime Business Card(s)</li>
              <li>Discover IT Gold Card</li>
              <li>Capital One Savor</li>
            </ul>
          </li>
        </ul>

        <h2>Subscription Services I use</h2>
        <ul>
          <li>Spectrum Mobile</li>
          <li>YouTube TV</li>
          <li>Netflix</li>
          <li>Tidal</li>
          <li>Amazon Prime</li>
          <li>Instacart</li>
        </ul>
      </div>

     

      
      <Footer />
    </div>
    
    
  );
}

export default Uses;
