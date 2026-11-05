import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'خوشه | گل‌های تازه برای لحظه‌های شما', description: 'دسته‌گل‌های تازه و دست‌ساز خوشه' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fa" dir="rtl"><body>{children}</body></html> }
