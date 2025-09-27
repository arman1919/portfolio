export default function FaviconLinks() {
  return (
    <>
      {/* Primary favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.png" type="image/png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      
      {/* Additional sizes for better compatibility */}
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
      
      {/* Manifest for PWA */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
    </>
  )
}
