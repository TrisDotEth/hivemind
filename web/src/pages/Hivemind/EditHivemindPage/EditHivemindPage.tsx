import EditHivemindCell from 'src/components/Hivemind/EditHivemindCell'

type HivemindPageProps = {
  id: number
}

const EditHivemindPage = ({ id }: HivemindPageProps) => {
  return <EditHivemindCell id={id} />
}

export default EditHivemindPage
