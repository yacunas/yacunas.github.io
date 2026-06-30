export default function BlackHole({ className = "" }: { className?: string }) {
  return (
    <div className={`gargantua-wrap ${className}`} aria-hidden>
      <div className="gargantua gpu">
        <div className="bh-disk bh-disk--2" />
        <div className="bh-disk bh-disk--3" />
        <div className="bh-disk" />
        <div className="bh-beam" />
        <div className="bh-core" />
        <div className="bh-halo" />
        <div className="bh-ring2" />
      </div>
    </div>
  );
}
