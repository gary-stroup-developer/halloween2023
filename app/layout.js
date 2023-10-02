import './globals.css';


export const metadata = {
  title: 'Halloween 2023 website by Stroup',
  description: 'Halloween website to offer history and fun ideas.',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
