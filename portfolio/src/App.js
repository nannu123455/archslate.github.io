import './App.css';
import{HiOutlineSparkles} from 'react-icons/hi';
import{TbWorld} from 'react-icons/tb';
import{CiRollingSuitcase} from 'react-icons/ci';
import{MdOutlineForwardToInbox} from 'react-icons/md';
import{AiOutlineUser} from 'react-icons/ai';
import{AiOutlineThunderbolt} from 'react-icons/ai'
import{AiOutlineStar} from 'react-icons/ai';
import{BsCurrencyDollar} from 'react-icons/bs';
import{GrLocation} from 'react-icons/gr';
import{AiOutlineShareAlt} from 'react-icons/ai';
import{BsSave} from 'react-icons/bs';
import{AiOutlineMessage} from 'react-icons/ai';
function App() {
  return (
    <div className="App">
      <img src="https://app.archslate.com/static/media/logo_new.c556f61b.png" alt="#" id="img1"></img>
      <span>Archslate</span>
      <nav id='navbar'>
        <ul id='ulfirst'>
          <li><HiOutlineSparkles/>Candidates</li>
          <li><TbWorld/>Companies</li>
          <li><CiRollingSuitcase/>jobs</li>
          <li><MdOutlineForwardToInbox/>Notifications</li>
          <li><AiOutlineUser/>User Name</li>
          </ul>
      </nav>
  
   <div className='container'>
    <div id='card'>
      <div id="div1">
       
        <img src="https://media.licdn.com/dms/image/C4D0BAQGD21JaQtqAzg/company-logo_100_100/0/1580863711117?e=1680134400&v=beta&t=nX_2CEEI5xODlpZwym6acjIEDtVipQ6HIGc7lad2Z2Q" id="img2"></img>
        <span>Architectural Desinger</span>
      <ul id="ul3">

     <li>Black Mountain Architecture</li>
     <li>Posted 07/27/2022</li>
      </ul>

     <button id="archi" className='buttons'>Architecture</button>
     <button id="free" className='buttons'>Freelance</button>
     <button id="long" className='buttons'>Long-term</button>
     <ul id="ul2">
      <li id="li-item"><AiOutlineShareAlt/><BsSave/></li>
      <li><button className="btn">Status:Accepting Applications</button></li>
      <li><button className='btn2'>Apply On Archslate</button></li>
     </ul>
      </div>

<div id="flex-container">
<div className='card' id='card1'>
  <h3><AiOutlineThunderbolt/>Software Skills</h3>
  <button className='btn-group'>Rhino</button>
  <button className='btn-group'>Sketchup</button>
  <button className='btn-group'>Vectorworks</button>
</div>
<div className="card"id="card2">
  <h2><AiOutlineStar/>Experience</h2>
  <h3>Associate<br></br> 3+ years</h3>
</div>

<div className="card"id="card3">
  <h2><BsCurrencyDollar/>Rate</h2>
  <h3>$55-$65/hour</h3>
</div>

<div className="card" id="card4">
  <h2><GrLocation/>Location</h2>
  <h3>Bozeman,MT USA</h3>
  <button id="btn-3"><AiOutlineMessage/>On-Site</button>
</div>

</div>
</div>
<div className='About'>
<h3>About this role</h3>
<p>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae).</p>
<div className="card" id="card5">
  <h3>Job Poster</h3>
  <img src=""></img>
  <h3>John Carlos</h3>
  <h2>Project Manager</h2>
  <button id="message">On-Site</button>
</div>
<br></br>
<h3>Responsibilities</h3>
<ul id="respo">
  <li>specific day to day taks</li>
  <li>deliverables</li>
  <li>work enviorment requirements</li>
  <li>role within current team</li>
  <li>etc</li>
</ul>
<br></br>
<h3>Skills</h3>
<ul id="skills">
  <li>software skills</li>
  <li>technical skills</li>
  <li>soft skills</li>
  <li>other</li>
</ul>
<br></br>
<h3>Qualifications</h3>
<h4>Required</h4>
<ul id="quali">
  <li>education</li>
  <li>licences and certifications</li>
  <li>experience needed</li>
</ul>
<br></br>
<h4>Bonus</h4>
<ul id="bonus">
<li>education</li>
  <li>licences and certifications</li>
  <li>experience needed</li>
</ul>
<br></br>
<h3>Rate</h3>
<ul id="rate">
  <li>if available</li>
</ul>
<br></br>
<h3>Time Estimate</h3>
<ul id="time">
  <li>if applicable</li>
</ul>
<br></br>
<h3>Work Autoriation</h3>
<ul id="tbd">
  <li>tbd</li>
</ul>
<br></br>
<h3>About Company</h3>
<p>A flower having sepals, petals, stamens, and pistils is complete; lacking one or more of such structures, it is said to be incomplete. Stamens and pistils are ...</p>
<br></br>
<div className='btn-all'>
<button className='orange'>Apply on Archslate</button>
<button className='black1'><AiOutlineStar/>Save</button>
<button className='black1'><AiOutlineShareAlt/>Share & Refer</button>
</div>
</div>
      </div>
      </div>
  );
}

export default App;
