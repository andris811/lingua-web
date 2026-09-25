import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = { title: 'Terms of Use — Lingua Playlist', description: 'Terms of Use for Lingua Playlist. Placeholder page.' };

export default function TermsPage() {
  return <LegalLayout title="Terms of Use">
    <aside className="legal-notice"><strong>Placeholder — terms coming soon.</strong><p>The Terms of Use for Lingua Playlist will be added to this page. This placeholder does not contain the final terms and conditions.</p></aside>
    <section><h2>Contact</h2><p>For questions, email <a href="mailto:avdev2024@gmail.com">avdev2024@gmail.com</a>.</p><p>You can also read our <Link href="/privacy">Privacy Policy</Link>.</p></section>
  </LegalLayout>;
}
