import '../css/App.css';
import logo from '../assets/logo.png';

const App = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="ShodaDev Logo" />
      <h1 className="color-white">I'm ShodaDev</h1>
      <a href="https://github.com/ShodaDev0081" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
      </a>
      <a href="https://discord.com/users/898285494373347379" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
          <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
          <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
          <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
        </svg>
      </a>
      <div style={{padding: 10}}>
        <h3 className="color-white">Student and Full-Stack Developer from Germany.</h3>
      </div>
      <div>
        <section className="section section-1">
          <h2 className="heading color-white"> About</h2>
          <p>Hello! I'm ShodaDev. A young full-stack developer that loves to code in Javascript. I also familar with HTML, CSS and TS. I currently learning React.</p>
        </section>
        <section className="section section-2">
          <h2 className="heading color-white"> Experience</h2>
          <p>I code for 2 years now. I started with Discord Bots (discord.js) and then learned to make APIs with Express.</p>
        </section>
        <section className="section section-3">
          <h2 className="heading color-white"> Projects</h2>
          <p>I'm currently developing a project with React, Express and Supabase! Its gonna be a clone of <a href="https://uptimerobot.com">UptimeRobot</a>.</p>
        </section>
        <section className="section section-4">
          <h2 className="heading color-white"> Skills</h2>
          <p>HTML<br/>CSS<br/>JS<br/>TS<br/>Node.js<br/>React<br/>Express<br/>Discord.js<br/>Bootstrap<br/>TailwindCSS<br/>Supabase<br/>SSH<br/>SFTP<br/>Shell/Bash<br/>Pterodactyl</p>
        </section>
        <section className="section section-5">
          <h2 className="heading color-white"> Contact</h2>
          <p>Discord: <a href="https://discord.com/users/898285494373347379" target="_blank">ShodaDev#0081</a>  <br/> Github: <a href="https://github.com/ShodaDev0081" target="_blank">ShodaDev0081</a> <br/> Website: <a href="https://shoda-uwu.eu">https://shoda-uwu.eu/</a> <br/> E-Mail: <a href="mailto:hello@shoda-uwu.eu">hello@shoda-uwu.eu</a></p>
        </section>
        </div>
        <div style={{paddingTop: 20}}>
          <a href="/imprint" target="_blank">Imprint</a> <br/> <a href="/privacy-policy" target="_blank">Privacy Policy</a>
        </div>
    </div>
  );
}

export default App;