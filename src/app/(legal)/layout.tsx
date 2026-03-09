export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-gray dark:prose-invert max-w-none">{children}</div>
      </div>
    </div>
  )
}
