import Navbar from '@/components/navbar';
import '../globals.css';
import { jolly } from '../utils/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${jolly.className }`}> 
      <Navbar text={"text-black"}/>
      {children}
      </body>
    </html>
  )
}
