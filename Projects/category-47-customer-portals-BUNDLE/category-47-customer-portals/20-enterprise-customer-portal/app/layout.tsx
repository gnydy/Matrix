import '../styles/globals.css';
export const metadata = { title: 'Enterprise Customer Portal', description: 'Tickets, invoices, files, orders, project status, account settings' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
