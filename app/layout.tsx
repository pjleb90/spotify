import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'

import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'A Spotify clone inspired by Code with Antonio',
};

export const revalidate = 0;  // stop layout from being cached

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar songs={userSongs}>
                {children}
              </Sidebar>
            </UserProvider>
          </SupabaseProvider>
      </body>
    </html>
  )
}
