export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-canvas"
    >
      <div className="blob blob-a absolute -top-[22%] -left-[18%] h-[75vmax] w-[75vmax]" />
      <div className="blob blob-b absolute -right-[18%] -bottom-[25%] h-[70vmax] w-[70vmax]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
