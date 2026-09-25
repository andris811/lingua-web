import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';
import { policy } from './policy';

export const metadata: Metadata = { title: 'Privacy Policy — Lingua Playlist', description: 'How Lingua Playlist collects, uses, stores, and shares information.' };
const providerLinks: Record<string, string> = {
  'Supabase Privacy Policy': 'https://supabase.com/privacy',
  'OpenAI Privacy Policy': 'https://openai.com/policies/privacy-policy/',
  'Microsoft Privacy Statement': 'https://privacy.microsoft.com/privacystatement',
  'Apple Privacy Policy': 'https://www.apple.com/legal/privacy/',
  'Google Privacy Policy': 'https://policies.google.com/privacy',
};

function inline(text: string) {
  return text.split(/(\[[^\]]+\]|avdev2024@gmail\.com)/g).map((part, index) => {
    if (part.startsWith('[')) return <mark className="missing-detail" key={index}><span className="missing-label">To complete: </span>{part.slice(1, -1)}</mark>;
    if (part === 'avdev2024@gmail.com') return <a key={index} href={`mailto:${part}`}>{part}</a>;
    return part;
  });
}

const sections = policy.split(/\n(?=\d+\. )/).map(section => section.split('\n'));

export default function PrivacyPage() {
  return <LegalLayout title="Privacy Policy">
    <p className="legal-updated">Last updated: <time dateTime="2026-09-25">September 25, 2026</time></p>
    <aside className="legal-notice"><strong>Draft — some details are still to be completed.</strong><p>Missing information is highlighted and marked “To complete” throughout this policy.</p></aside>
    {sections.map(([heading, ...lines], sectionIndex) => {
      const blocks: React.ReactNode[] = [];
      for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        if (line.startsWith('- ')) {
          const items = [];
          const start = index;
          while (index < lines.length && lines[index].startsWith('- ')) {
            items.push(<li key={index}>{inline(lines[index].slice(2))}</li>);
            index++;
          }
          index--;
          blocks.push(<ul key={start}>{items}</ul>);
        } else if (line.startsWith('## ')) {
          blocks.push(<h3 key={index}>{line.slice(3)}</h3>);
        } else {
          blocks.push(<p key={index}>{providerLinks[line] ? <a href={providerLinks[line]}>{line}</a> : inline(line)}</p>);
        }
      }
      return <section key={heading} aria-labelledby={`section-${sectionIndex + 1}`}><h2 id={`section-${sectionIndex + 1}`}>{heading}</h2>{blocks}</section>;
    })}
  </LegalLayout>;
}
