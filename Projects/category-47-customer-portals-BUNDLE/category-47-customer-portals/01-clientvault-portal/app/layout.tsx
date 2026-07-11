import '../styles/globals.css';
export const metadata = { title: 'ClientVault Portal', description: 'Tickets, invoices, files, orders, project status, account settings' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
