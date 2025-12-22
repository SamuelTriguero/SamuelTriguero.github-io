var linkedin = "https://www.linkedin.com/in/samuel-triguero/";
var github = "https://github.com/SamuelTriguero";
var sudo = "https://www.youtube.com/watch?v=fBGWtVOKTkM?autoplay=1";
var email = "mailto:";
var archive = "/static/archive.html";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my site! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let whoami = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Samuel! 👋</span>`,
  "<br>",
  `<li>🔧 I'm a IT Analyst passionate about all things IT and Cybersecurity.</li>`,
  `<li>💡 Always eager to learn new technologies and build new skills.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to check out what I’ve built!</li>`,
  `<li>👥 Looking to collaborate or get in contact? I will be updating the contact section in the near future.</li>`,
  `<li>📫 Contact: <a href="mailto:"></a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/Samuel-Triguero</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/SamuelTriguero</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">whoami</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ This command does nothing at the moment.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ sudo.
<span class="command">games</span>
↳ List Games.
<span class="command">clear</span>
↳ Clear the terminal.
<span class="command">exit</span>
↳ Close the terminal tab.
</pre></div><br>`,
];

let games = [
  `<br><div id="list-games"><pre class="whitespace-pre-wrap">
<span class="command">GlobalThermalNuclearWar</span>
↳ Shall we play a game?
<span class="command">snake</span>
↳ Run Snake Game.
</pre></div><br>`,
];
let globalthermalnuclearwar = [
  "<br>",
  `<div id="GlobalThermalNuclearWar">`,
  `<span class='underline'>Greetings, Professor Falken</span>`,
  `<li> A strange game..</li>`,
  `<li> The only winning move is not to play.</li>`,
  `<li> How about a nice game of <span class="command">snake</span>?</li>`,
  "</div>",
  "<br>",]
  let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<a href=" target="_blank"><span class='underline'>Pending Projects</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Projects will be added in the near future.
Live: <a href="static/404.html" target="_blank">Place Holder</a>
Built With:
 -Hopes
 -Dreams
</pre>`,
`<li> -- <span class="command">archive</span> --</li>`,
  "<br>",

];
