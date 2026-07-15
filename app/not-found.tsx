import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-neutral-900">
      <div className="max-w-md text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 leading-7 text-neutral-600">
          The page you requested does not exist or has moved.
        </p>
        <Link
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-neutral-900"
          href="/"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
