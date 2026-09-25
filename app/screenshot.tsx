/** Render screenshots directly so their visibility never depends on hydration. */
export default function Screenshot({ name, label, eager = false }: { name: string; label: string; eager?: boolean }) {
  return (
    <div className="screen">
      {/* Native images let screenshots be replaced directly in public/. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/${name}.jpg`}
        alt={label}
        width={393}
        height={852}
        loading={eager ? 'eager' : 'lazy'}
      />
    </div>
  );
}
