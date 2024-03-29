import WaitlistButton from '../waitlist-button'

export default function WaitlistHero() {
  return (
    <div className="mt-6 bg-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Be the first to know when we launch
          <br />
          <span className="text-2xl font-light">
            {' '}
            We’re working on a marketplace of lenders and borrowers to provide a
            great way to invest in mortgages and earn a return on your
            investment.
          </span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <WaitlistButton />
          {/* <a href="#" className="text-base font-semibold leading-7 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>
    </div>
  )
}
