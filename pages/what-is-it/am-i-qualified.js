import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/blog/container'
import Link from 'next/link'
import WaitlistButton from '../../components/waitlist-button'
import Banner from '../../components/sections/Banner'
import WaitlistHero from '../../components/sections/waitlist-hero'

export default function AmIQualifiedPage() {
  return (
    <Layout>
      <Head>
        <title>Am I Qualified?? | Mr Arms Length Mortgage</title>
        <meta
          name="description"
          content="WHO qualifies as a potential “RRSP-Mortgage” investor? There are three basic categories of people qualified to participate in this type of…"
        ></meta>
      </Head>
      <Container>
        <Banner
          title={'Am I Qualified?'}
          description={'WHO qualifies as a potential “RRSP-Mortgage” investor?'}
          image={'/assets/cover-qualified.jpg'}
          imageAlt={'Am I Qualified?'}
        />
        <p className="mt-4">
          There are three basic categories of people qualified to participate in
          this type of investment. They are:
        </p>
        <ol className="ml-10 list-decimal">
          <li className="mt-2">
            Current RRSP account holder (people who have their RRSP account
            somewhere already)
          </li>
          <li className="mt-2">
            New RRSP account holder (people who have cash to put into their RRSP
            but don’t have an account yet)
          </li>
          <li className="mt-2">
            Those with RRSP contribution room (people who have not made
            contributions, but have ‘credits’ that have accumulated – see your
            tax return)
          </li>
        </ol>

        <p className="mt-4">
          An Arm’s Length Mortgage is available to people who have these types
          of registered investment accounts that are held at financial
          institutions:
        </p>
        <ul className="ml-10 list-disc">
          <li className="mt-2">RRSP: Registered Retirement Savings Plan</li>
          <li className="mt-2">RRIF: Registered Retirement Income Funds</li>
          <li className="mt-2">LIRA: Locked In Retirement Account</li>
          <li className="mt-2">TFSA: Tax Free Savings Account</li>
        </ul>
        <p className="mt-4">
          Eligible investments that can be used for Arm’s Length Mortgages
          include:
        </p>
        <ul className="ml-10 list-disc">
          <li className="mt-2">Stocks</li>
          <li className="mt-2">Mutual Funds</li>
          <li className="mt-2">Term Deposits</li>
          <li className="mt-2">Debentures</li>
          <li className="mt-2">Bonds</li>
          <li className="mt-2">Gold &amp; Silver Certificates</li>
          <li className="mt-2">Equity Linked Notes</li>
          <li className="mt-2">Guaranteed Income Certificates (GICs)</li>
        </ul>
        <p className="mt-4">
          Arm’s Length Mortgages are eligible for ALL types of properties
          (residential, commercial, industrial, vacant / raw land, recreational)
          but NOT for mobile homes or house boats (because the property must be
          registered in the land registry system / land titles).
        </p>
        <p className="mt-4">
          One caveat: the property for which the mortgage will be used MUST be
          located in Canada.
        </p>
        <p className="mt-4">
          More than one lender can have an Arm’s Length Mortgage on the same
          real estate (for example, one person holds a first mortgage while
          another person holds a second mortgage, or two people pool their money
          and hold a first mortgage together).
        </p>
        <p className="mt-4">
          Arm’s Length Mortgages are exactly what the name implies: ARM’S
          LENGTH—they CAN’T be used for self, parents, siblings, spouse,
          children, and in-laws.
        </p>
        <p className="mt-4">
          If you would like to invest your RRSPs in other people’s mortgages,
          please stay tuned. We are working on a solution for this.
        </p>

        <div className="mt-4 text-center">
          <WaitlistButton />
        </div>
      </Container>
      <WaitlistHero />
    </Layout>
  )
}
