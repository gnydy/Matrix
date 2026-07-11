import '../styles/globals.css';
export const metadata = { title: 'FashionEditorial Site', description: 'Articles, categories, authors, trending content, newsletters, and ads layouts' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
