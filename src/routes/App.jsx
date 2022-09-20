import '../css/App.css';
import logo from '../assets/logo.png';
import GithubLogo from '../assets/GithubLogo.svg';
import DiscordLogo from '../assets/DiscordLogo.svg';

const App = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="ShodaDev Logo" />
      <h1 className="color-white">I'm ShodaDev</h1>
      <a href="https://github.com/ShodaDev0081" target="_blank">
        <img className="icon" src={GithubLogo} alt="GithubLogo" />
      </a>
      <a href="https://discord.com/users/898285494373347379" target="_blank">
      <img className="icon" src={DiscordLogo} alt="DiscordLogo" />
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