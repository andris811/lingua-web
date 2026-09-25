// Google Play URL uses the Android project's production applicationId.
// Confirm both listings before publishing the website.
export const stores = [
  { name: 'App Store', label: 'Download on the App Store', url: 'https://apps.apple.com/app/id6777853979' },
  { name: 'Google Play', label: 'Get it on Google Play', url: 'https://play.google.com/store/apps/details?id=com.linguaplaylist.android' },
];

export default function StoreLinks() {
  return <div className="store-links" aria-label="Download Lingua Playlist">
    {stores.map(store => <a className="primary-action" href={store.url} key={store.name}>{store.label}<span aria-hidden="true">↗</span></a>)}
  </div>;
}
