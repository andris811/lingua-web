import Link from 'next/link';

export default function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap legal-header">
      <Link className="brand" href="/">Lingua <span className="brand-light">Playlist</span></Link>
      <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link></nav>
    </header>
    <main id="main" className="wrap legal-article"><p className="eyebrow">Lingua Playlist</p><h1>{title}</h1>{children}</main>
    <footer className="wrap site-footer"><Link className="footer-brand" href="/">Lingua Playlist</Link><nav aria-label="Footer navigation"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link></nav></footer>
  </>;
}
