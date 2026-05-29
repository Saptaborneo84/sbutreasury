export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Admin Panel</h1>

        <p className="mt-4 text-slate-400">
          Admin access is restricted. Please login before accessing operational controls.
        </p>

        <a
          href="/admin-login"
          className="mt-10 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950"
        >
          Go to Admin Login
        </a>
      </div>
    </main>
  );
}
