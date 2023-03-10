import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function WaitlistButton() {
  const [open, setOpen] = useState(false)

  // form state
  const [emailInput, setEmailInput] = useState('')
  const [buttonLoading, setButtonLoading] = useState(false)

  const cancelButtonRef = useRef(null)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // setButtonLoading(true)

    // Get data from the form.
    const data = {
      email: emailInput,
    }

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    try {
      // Send the form data to our subscribe API and get a response.
      const res = await fetch('/api/subscribe', options)
      const data = await res.json()

      if (res.status === 200) {
        alert('You are subscribed!')
        setEmailInput('') // clear the input field
        setOpen(false) // close the modal
      } else {
        alert(`Sorry, something went wrong.`)
      }

      // setButtonLoading(false)

      // TODO: use toasts instead of alerts
    } catch (e) {
      alert('Something went wrong, please try again later.')
    }
  }

  return (
    <>
      <button
        href="#"
        onClick={() => setOpen(true)}
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700"
      >
        Join the Waitlist
      </button>

      {open && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            // initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Join the waitlist
                      </h3>
                      <p className="mt-4 text-base text-gray-500">
                        We are still building... Subscribe for updates and 20%
                        off when we launch. No spam, we promise!
                      </p>
                      <form
                        onSubmit={handleFormSubmit}
                        className="mt-4 sm:flex sm:max-w-md"
                      >
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          type="text"
                          // type="email"
                          name="email"
                          id="email"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          required
                          className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:placeholder-gray-400 focus:outline-none focus:ring-sky-500"
                          placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                          <button
                            type="submit"
                            // isLoading={buttonLoading}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r bg-sky-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  )
}
