'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ textColor }) {
  return (
    <Link
      href='/'
      className='-m-1.5 flex items-center space-x-2 p-1.5 sm:space-x-3'
    >
      <Image
        src={'/421984638_122095765478217716_4985967833450123091_nwalid.jpg'}
        alt='fghdfg'
        width={150}
        height={150}
      />
      {/* <Image
        className='sm:h-8 sm:w-8'
        src='/421984638_122095765478217716_4985967833450123091_n.jpg'
        alt='fghdfg'
        width={32}
        height={32}
      /> */}
    </Link>
  )
}
