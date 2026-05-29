export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </div>
    </section>
  );
}
