export default function BlackHole({ className = "" }: { className?: string }) {
  return (
    <div className={`gargantua-wrap ${className}`} aria-hidden>
      <div className="gargantua gpu">
        <div className="bh-disk bh-disk--2" />
        <div className="bh-disk" />
        <div className="bh-halo" />
        <div className="bh-core" />
      </div>
    </div>
  );
}
