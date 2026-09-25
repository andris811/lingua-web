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

The app icon was copied from the iOS project. The App Store ID comes from the app’s existing redemption URL. Update `appStoreUrl` in `app/page.tsx` if necessary. All page copy and screenshot mappings are in the same file; styling is in `app/globals.css`.
# lingua-web
