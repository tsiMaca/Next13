import Navbar from "../components/Navbar";


export const metadata = {
  title: "Mi tienda con nextJS",
  description:"Esta es la pagina principal de mi tienda",
  keywords:'tienda, online, ecommerce'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
