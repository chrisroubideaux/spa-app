"use client"
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Raleway, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/hero.css';
import '@/styles/cards.css';
import '@/styles/form.css';



const inter = Raleway({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
