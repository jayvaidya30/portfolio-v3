export function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-[#0b1016]">
      <img
        src="/bg-1.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a0e]/80 via-transparent to-[#050a0e]/85" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
