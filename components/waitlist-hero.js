import WaitlistButton from './waitlist-button'

export default function WaitlistHero() {
  return (
    <div className="bg-sky-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Ready to dive in?
          <br />
          <span className="font-light"> Join our waitlist now.</span>
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
