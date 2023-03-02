import Head from 'next/head';

export default function Home() {
  return (
<div class="flex flex-col items-center justify-center w-3/5 max-w-screen-sm mx-auto">
      <h3 class="text-xl font-bold text-center mb-4">Hello, builder</h3>

      <p class="text-center mb-4">
        I'm Lennard, a "hacker" from Germany. I like to build things that solve problems. I'm mostly focused on full-stack development and backend. Here's a few things I've built:
      </p>

      <br />

      <ul class="list-disc list-inside text-left">
        <li>
          <a href="feed-ai.lol">FeedAI (Train private models from your Instagram posts; 250 users)</a>
        </li>
        <li>
          <a href="">OneLiner (Copywriting inside Figma; 1.3k users)</a>
        </li>
      </ul>

      <div class="divider"></div> 

      <h3 className="text-2+xl font-bold text-center mb-4">Events/Hackathon</h3>

      <br />

      <p class="text-center mt-4">
        I have participated in a new events, which are listed below. I'm looking forward to the next one or joining new communities (HMU on Twitter, if you know any; especially in the field of AI and from Germany)
      </p>

      <br />

      <ul class="list-disc list-inside text-left">
          <li>
            <a href="https://twitter.com/lennardeth/status/1628147767267758081?s=20" target='_blank'>LeapML Hackathon (🏆 #1 with FeedAI)</a>
          </li>

          <li>
            <a href="https://buildspace.so/nights-and-weekends" target='_blank'>Buildspace Nights&Weekends S1/2 (finished all 6 weeks)</a>
          </li>
      </ul>


      <div class="divider"></div> 

      <h3 className="text-xl font-bold text-center mb-4">Other</h3>

      <br />

      <p class="text-center mt-4">
        Some of my work got featured. Feel free to check them out:
      </p>

      <br />

      <ul class="list-disc list-inside text-left">
          <li>
            <a href="https://twitter.com/bensbitesdaily/status/1627739166594179072" target='_blank'>Level up your GPT-3 prompts (Note I wrote on Buildspace)</a>
          </li>

          <li>
            <a href="https://www.bensbites.co/p/ai-cure-addiction" target='_blank'>FeedAI in Ben's Bites "🛠️ Cool Tools"</a>
          </li>
      </ul>

      <br />

      <div className="alert shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Freelancing</h3>
            <div className="text-xs">I'm open for freelancing at any time. Feel free to DM me on Twitter or send an email to lennardsolana@gmail.com</div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm">
            <a href="https://twitter.com/lennardeth" target='_blank'>DM me on Twitter</a>
          </button>
        </div>
      </div>
    </div>
  );
}
