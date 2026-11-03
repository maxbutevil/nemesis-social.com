import './styles/index.scss';
import logoNemesis from "./assets/logo-nemesis.svg";
import { ChevronLeft, ChevronRight, CircleCheck, CircleQuestionMark, Flame, Heart, Swords, Trophy, type LucideIcon } from 'lucide-solid';
import { createEffect, createSignal, Index, onMount, type JSXElement } from 'solid-js';

function Logo() {
  return (
    <div id="splash-logo">
      <img class="logo-nemesis" src={logoNemesis} />
      <div class="logo-social">SOCIAL</div>
    </div>
  );
};
function LogoSection() {
  return (
    <section id="logo-section">
      <Logo />
      <div class="section-spacer" />
    </section>
  );
}
function Socials() {
  
}

function Archetype(props: { color: string, name: string, hint: string, desc: string, icon: LucideIcon }) {
  return (
    <div class="archetype" style={{ "border-color": props.color, "background-color": props.color + "3b" }} >
      <div class="archetype-content">
        <div class="archetype-name">{props.name}</div>
        <div class="archetype-hint">{props.hint}</div>
        <div class="archetype-desc">{props.desc}</div>
      </div>
      <div class="archetype-icon">
        <props.icon width={36} height={36} />
      </div>
    </div>
  );
}

function ScrollFlow({ children }: { children: JSXElement }) {
  
  const flow = (
    <main id="scroll-flow" children={children} />
  ) as HTMLElement;
  
  const [item, setItem] = createSignal(0);
  const items = [...flow.children];
  
  onMount(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setItem(items.indexOf(entry.target));
            break;
          }
        }
      },
      {
        root: flow,
        threshold: 0.5
      }
    );
    
    for (const child of flow.children) {
      observer.observe(child);
    }
  });
  
  
  
  function scrollTo(index: number) {
    
    //const target = flow.children[index] as HTMLElement;
    /*target.children[0].scrollIntoView({
      block: "start",
      inline: "nearest",
      //top: target.offsetTop,
      behavior: 'smooth',
    });*/
    const target = flow.children[index] as HTMLElement;
    flow.scroll({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }
  function scrollToPrev() {
    scrollTo(Math.max(item() - 1, 0));
  }
  function scrollToNext() {
    scrollTo(Math.min(item() + 1, items.length - 1));
  }
  
  return (
    <>
      {flow}
      <div id="scroll-flow-nav">
        <div id="scroll-flow-btn-ctr">
          <button
            class="scroll-flow-prev-btn"
            on:click={scrollToPrev}
          >
            <ChevronLeft />
          </button>
          <Index each={items}>
            {(_, i) =>
              <button
                class="scroll-flow-item-btn"
                classList={{active: i == item()}}
                on:click={() => scrollTo(i)}
              />
            }
          </Index>
          <button
            class="scroll-flow-next-btn"
            on:click={scrollToNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

function InfoSection() {
  return (
    <section id="info-section">
      <div class="section-content">
        <div class="info-card">
          <div class="info-hflow">
            <div class="info-content-primary">
              <p class="section-quote">What if dating was evil?</p>
              <p>
                Welcome to <i>Nemesis Social</i>: the first dating app for finding a nemesis instead of a partner.
              </p>
              <p>
                Perhaps you're looking for a new source of negativity in your life.
                Or maybe you thrive on conflict and need someone to disagree with.
                <i> Nemesis</i> can make these dreams a reality.
              </p>
              {/*<p>
                Perhaps you're a hero, looking for a villain, whose evil schemes simply must be stopped!
                Or maybe you're the villain, seeking out a hero worthy of opposing your greatness.
                <i> Nemesis</i> can make these dreams a reality.
              </p>*/}
            </div>
            <div class="info-content-secondary">
              <p class="section-quote">What if dating was good?</p>
              <p>
                We'll let you in on a secret: we're here to help you find friends, not enemies.
                At its heart, <i>Nemesis</i> is just a social app with a built-in icebreaker.
                But it's fun to commit to the bit :)
              </p>
              <p>
                Plus, it's not just for dating! Nemesis is great for making friends as well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-spacer" />
    </section>
  );
}

function ArchetypeSection() {
  return (
    <section id="archetype-section">
      <div class="section-content">
        <div class="section-card">
          <p class="section-quote">Find your other half</p>
          <p>No matter what kind of nemesis you're looking for, you can find them here:</p>
          <div class="archetype-list">
            <Archetype
              color="#44ee77"
              name="A Worthy Opponent"
              hint="Platonic friendship"
              desc="An enemy you can count on"
              icon={Swords}
            />
            <Archetype
              color="#eee900"
              name="An Inspiring Adversary"
              hint="A gym/study/activity partner"
              desc="A rival who pushes you to greater heights"
              icon={Trophy}
            />
            <Archetype
              color="#ff6644"
              name="A Passionate Rivalry"
              hint="Short-term romance"
              desc="Turns up the heat and keeps you on your toes"
              icon={Flame}
            />
            <Archetype
              color="#dd55dd"
              name="An Enemies-to-Lovers Arc"
              hint="Long-term, serious romance"
              desc="Your greatest foe, turned your greatest ally"
              icon={Heart}
            />
            <Archetype
              color="#4488ff"
              name="A Tenuous Alliance"
              hint="Seeing where things go"
              desc="An unknown quantity - anything could happen"
              icon={CircleQuestionMark}
            />
          </div>
        </div>
      </div>
      <div class="section-spacer" />
    </section>
  );
}

function MonetizationSection() {
  return (
    <section id="monetization-section">
      <div class="section-content">
        <div class="section-card">
          <div class="section-hflow">
            <div class="monetization-content">
              <p class="section-quote">You only pay if it works</p>
              <p>
                Nemesis was created to bring people together.
                We do our best to provide a great experience, <b>completely free of charge</b>.
                Nothing is locked behind a paywall, except for a few cosmetic features.
              </p>
              <p>
                In return, we ask that you make a small $5 purchase if the app helps you meet someone cool.
              </p>
              <p>
                If donating is genuinely difficult for you, you're off the hook.
                But if you can afford it, $5 is a small price to pay for a new friend, partner, or archenemy.
                We're a small team making a big app, and we rely on these purchases to keep the lights on.
                They truly mean a lot.
              </p>
            </div>
            <div class="tile-list">
              <div class="tile">
                <CircleCheck />
                <div>No Ads</div>
              </div>
              <div class="tile">
                <CircleCheck />
                <div>No Paywalls</div>
              </div>
              <div class="tile">
                <CircleCheck />
                <div>No Subscriptions</div>
              </div>
              <div class="tile">
                <CircleCheck />
                <div>No Data Harvesting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-spacer" />
    </section>
  );
}

function MissionSection() {
  return (
    <section id="status-section">
      <div class="section-content">
        <div class="section-card">
          <div class="section-quote">A new kind of dating</div>
          <p>
            Today, the biggest dating apps are backed by large corporations, and built to keep you swiping forever.
          </p>
          <p>
            On the other hand, Nemesis is a small business.
            No ads, no shareholders, no predatory monetization.
            We're a small team trying to make an app that makes the world a slightly better place.
            It sounds cliché, but it's true!
          </p>
        </div>
      </div>
      <div class="section-spacer" />
    </section>
  );
}

function App() {
  return (
    <ScrollFlow>
      <LogoSection />
      <InfoSection />
      <ArchetypeSection />
      <MonetizationSection />
      
    </ScrollFlow>
  );
}

export default App;
