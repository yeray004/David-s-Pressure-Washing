import './globals.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'David´s Pressure Washing',
  description: 'General desc of the page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')</style>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
