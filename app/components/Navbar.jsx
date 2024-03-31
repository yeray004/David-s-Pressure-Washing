import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/services'>Services</Link>
      </div>
    </nav>
  )
}
