import { Disclosure } from '@headlessui/react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const Faq = () => {
  return (
    <div className="">
      <Disclosure>
        <Disclosure.Button className="py-2">
          <QuestionMarkCircleIcon className="h-5 w-5 pl-0 text-gray" />
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500 absolute bg-white">
          Yes! You can purchase a license that you can share with your entire
          team.
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}

export default Faq
