import Link from 'next/link'

export default function CreateTokenHeader() {
  return (
    <div className="w-full block content-center text-center">
      <Link href="/create" className="hover:font-semibold text-2xl">
        [start a new coin]
      </Link>
    </div>
  )
}
