export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="prose prose-gray dark:prose-invert max-w-none">{children}</div>
      </div>
    </div>
  )
}
