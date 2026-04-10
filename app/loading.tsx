export default function Loading() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Skeleton */}
      <section className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center px-4 sm:px-6 lg:px-8 w-full max-w-2xl mx-auto">
          {/* Profile card skeleton */}
          <div className="mb-8 flex justify-center">
            <div className="w-[350px] h-[200px] rounded-2xl skeleton-pulse" />
          </div>
          {/* Description skeleton */}
          <div className="space-y-3 mb-8">
            <div className="h-4 skeleton-pulse rounded-full w-full mx-auto" />
            <div className="h-4 skeleton-pulse rounded-full w-4/5 mx-auto" />
            <div className="h-4 skeleton-pulse rounded-full w-3/5 mx-auto" />
          </div>
          {/* Button skeleton */}
          <div className="flex justify-center mb-12">
            <div className="h-10 w-32 skeleton-pulse rounded-lg" />
          </div>
          {/* Contact info skeleton */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="h-4 w-32 skeleton-pulse rounded-full" />
            <div className="h-4 w-44 skeleton-pulse rounded-full" />
            <div className="h-4 w-36 skeleton-pulse rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-9 w-48 skeleton-pulse rounded-full mx-auto mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="h-5 skeleton-pulse rounded-full w-full" />
                <div className="h-5 skeleton-pulse rounded-full w-11/12" />
                <div className="h-5 skeleton-pulse rounded-full w-4/5" />
                <div className="h-4 skeleton-pulse rounded-full w-full" />
                <div className="h-4 skeleton-pulse rounded-full w-3/4" />
              </div>
              <div className="h-64 skeleton-pulse rounded-xl" />
            </div>
            <div className="space-y-8">
              <div className="h-52 skeleton-pulse rounded-xl" />
              <div className="h-44 skeleton-pulse rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-9 w-56 skeleton-pulse rounded-full mx-auto mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-56 skeleton-pulse rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-9 w-52 skeleton-pulse rounded-full mx-auto mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <div className="h-56 skeleton-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 w-2/3 skeleton-pulse rounded-full" />
                  <div className="h-4 w-full skeleton-pulse rounded-full" />
                  <div className="flex gap-2">
                    <div className="h-7 w-24 skeleton-pulse rounded-full" />
                    <div className="h-7 w-20 skeleton-pulse rounded-full" />
                    <div className="h-7 w-22 skeleton-pulse rounded-full" />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <div className="h-10 flex-1 skeleton-pulse rounded-lg" />
                    <div className="h-10 flex-1 skeleton-pulse rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline skeleton styles */}
      <style>{`
        .skeleton-pulse {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.03) 25%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.03) 75%
          );
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.8s ease-in-out infinite;
        }
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
