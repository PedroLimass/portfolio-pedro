export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-accent-soft px-2 py-0.5 font-mono text-xs text-foreground/80">
      {children}
    </span>
  );
}
