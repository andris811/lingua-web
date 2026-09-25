import Link from 'next/link';
import Screenshot from './screenshot';

const appStoreUrl = 'https://apps.apple.com/app/id6777853979';
const features = [
  ['01', 'Make it personal.', 'Build playlists around the sentences you actually want to use. Keep travel phrases, daily conversations, and new discoveries together.'],
  ['02', 'Press play. Keep going.', 'Listen hands-free with autoplay. Adjust the speed, order, and repeats, and keep your playlist playing in the background.'],
  ['03', 'Find your voice.', 'Record yourself saying a sentence and get pronunciation feedback. Listen, try again, and grow more comfortable speaking.'],
  ['04', 'Speak it. Save it.', 'Capture a thought with your voice, transcribe it, and translate it into a sentence you can practice later.'],
  ['05', 'Make the words stick.', 'Review your sentences as flashcards. Rate what you know and give the phrases you’re still learning another look.'],
  ['06', 'Bring your own words.', 'Save text from Safari, scan printed text, or import sentences. Turn the language you encounter into your next playlist.'],
];
const screens = [
  { name: 'playlists', label: 'Your sentence playlists', title: 'A place for every phrase.', copy: 'Organize what you’re learning into playlists that make sense to you.' },
  { name: 'player', label: 'Hands-free autoplay', title: 'Learning, on repeat.', copy: 'Set your pace and let your sentences become familiar.' },
  { name: 'practice', label: 'Pronunciation practice', title: 'Say it with confidence.', copy: 'Record your voice and get feedback on your pronunciation.' },
  { name: 'review', label: 'Flashcard review', title: 'Come back. Remember more.', copy: 'Check what you know, one sentence at a time.' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="Lingua Playlist home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" width="42" height="42" alt="" />
          <span>Lingua <span className="brand-light">Playlist</span></span>
        </a>
        <nav aria-label="Main navigation"><a href="#features">Features</a><a href="#screens">Screens</a><a className="nav-download" href={appStoreUrl}>Get the app <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-inner wrap">
            <div className="hero-copy">
              <p className="eyebrow">Your language. On repeat.</p>
              <h1>Make a language<br /><em>part of your<br />everyday.</em></h1>
              <p className="hero-text">Turn the sentences you want to learn into your own playlist. Listen, speak, and remember — wherever life takes you.</p>
              <div className="hero-actions"><a className="primary-action" href={appStoreUrl}>Download on the App Store <span aria-hidden="true">↗</span></a><a className="secondary-action" href="#features">Take a closer look <span aria-hidden="true">↓</span></a></div>
              <p className="platform-note">Made for iPhone. Built around your words.</p>
            </div>
            <div className="hero-visual" aria-label="Lingua Playlist app previews">
              <div className="phone phone-back"><Screenshot name="home" label="Lingua Playlist home screen" eager /></div>
              <div className="phone phone-main"><Screenshot name="player" label="Hands-free autoplay" eager /></div>
              <span className="visual-caption">LISTEN. SPEAK. REPEAT.</span>
            </div>
          </div>
        </section>
        <section className="summary-band"><div className="wrap summary-grid"><p>A little listening.<br />A little speaking. <span>Every day.</span></p><div className="tags"><span>Personal playlists</span><span>Hands-free audio</span><span>Pronunciation</span><span>Flashcards</span></div></div></section>
        <section className="wrap section" id="features">
          <div className="section-heading"><p className="eyebrow">From the first listen to the next conversation</p><h2>Your words.<br />Your way to learn.</h2><p>You choose what matters. Lingua Playlist gives you a simple way to listen to it, practice it, and keep it with you.</p></div>
          <div className="feature-grid">{features.map(([number, title, copy]) => <article className="feature-card" key={number}><span className="feature-number">{number}<span aria-hidden="true"> /</span></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>
        <section className="section-band"><div className="wrap section use-grid"><div><p className="eyebrow">Fits into real life</p><h2>Take your next<br />lesson with you.</h2></div><div className="use-copy"><p>On a walk. On your commute. While making coffee. A few familiar sentences can turn an ordinary moment into a little more practice.</p><ul><li>The phrases for your next trip</li><li>The conversations you want to have</li><li>The words you keep coming back to</li><li>The language you want to make your own</li></ul></div></div></section>
        <section className="wrap section" id="screens"><div className="section-heading centered"><p className="eyebrow">A closer look</p><h2>Less setup.<br />More practice.</h2><p>From collecting sentences to saying them out loud, keep your learning in one place.</p></div><div className="screenshot-grid">{screens.map(screen => <article className="screenshot-card" key={screen.name}><div className="phone"><Screenshot name={screen.name} label={screen.label} /></div><h3>{screen.title}</h3><p>{screen.copy}</p></article>)}</div></section>
        <section className="section-band"><div className="wrap section cta"><p className="eyebrow">Lingua Playlist for iOS</p><h2>Your next conversation<br />starts with <em>a listen.</em></h2><p>Start with a sentence. Make it a playlist. Make it part of your day.</p><a className="primary-action" href={appStoreUrl}>Download on the App Store <span aria-hidden="true">↗</span></a></div></section>
      </main>
      <footer className="wrap site-footer"><a className="footer-brand" href="#top">Lingua Playlist</a><nav aria-label="Footer navigation"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><a href="#top">Back to top ↑</a></nav></footer>
    </>
  );
}
