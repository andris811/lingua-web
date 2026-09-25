# Lingua Playlist website

A responsive Next.js showcase, styled to match When with Lingua’s indigo palette.

## Run

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. `pnpm build` creates a production build; `pnpm start` serves it. Run `pnpm lint` to check the source.

## Add screenshots

Place these portrait JPG files directly in `public/`:

| File | Screenshot |
| --- | --- |
| `home.jpg` | Home screen (hero) |
| `playlists.jpg` | Playlist overview |
| `player.jpg` | Autoplay screen |
| `practice.jpg` | Pronunciation practice |
| `review.jpg` | Flashcard review |

The hero uses `home.jpg` and `player.jpg`. Screenshots render directly without waiting for client-side JavaScript. Refresh after replacing the files. Frames use a 393:852 ratio and contain images without cropping; matching screenshot dimensions look best.

The app icon was copied from the iOS project. The App Store ID comes from the app’s existing redemption URL. Manage both store URLs in `app/store-links.tsx`. All page copy and screenshot mappings are in the same file; styling is in `app/globals.css`.

## iOS and Android launch

The page is written for the joint iOS and Android launch, with both store buttons in the hero and download section. The Google Play URL is based on the production Android application ID, `com.linguaplaylist.android`. Confirm the published Google Play listing before deploying; update `app/store-links.tsx` if its URL changes.

Current screenshots are from iOS and are labeled accordingly. The privacy policy already covers both platforms; its highlighted missing details and the Terms of Use placeholder still need completion before launch.
