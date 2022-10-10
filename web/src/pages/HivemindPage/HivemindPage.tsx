import { MetaTags } from '@redwoodjs/web'

const HivemindPage = () => {
  return (
    <>
      <MetaTags
        title="Hivemind"
        description="Hivemind - Collective ownership"
      />
      <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hivemind</span>{' '}
            <span className="block text-indigo-600 xl:inline">
              Be part of something
            </span>
          </h1>
        </div>
      </main>
    </>
  )
}

export default HivemindPage
