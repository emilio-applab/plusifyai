import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // On desktop: flex row — sidebar + content side-by-side
    // On mobile: DocsSidebar renders toggle + collapsible nav above children
    <div className="container mx-auto px-4 md:flex md:gap-12 md:py-10">
      <DocsSidebar />
      <main className="min-w-0 flex-1 py-8 md:py-0 prose prose-gray dark:prose-invert max-w-none">
        {children}
      </main>
    </div>
  );
}
