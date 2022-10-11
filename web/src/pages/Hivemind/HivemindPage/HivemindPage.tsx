import HivemindCell from 'src/components/Hivemind/HivemindCell'

type HivemindPageProps = {
  id: number
}

const HivemindPage = ({ id }: HivemindPageProps) => {
  return <HivemindCell id={id} />
}

export default HivemindPage
