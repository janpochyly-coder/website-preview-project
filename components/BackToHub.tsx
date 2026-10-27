import Link from "next/link";

export default function BackToHub({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Späť na rozcestník návrhov"
      className={`fixed bottom-4 left-4 z-[60] rounded-full px-3 py-1.5 text-xs font-medium opacity-70 shadow-md backdrop-blur transition hover:opacity-100 focus-visible:opacity-100 ${
        dark ? "bg-white/90 text-neutral-900" : "bg-neutral-900/85 text-white"
      }`}
    >
      ← Rozcestník
    </Link>
  );
}
