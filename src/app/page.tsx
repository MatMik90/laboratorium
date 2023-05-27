import { Body } from '../components/Body'

export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Body>{children}</Body>
  )
}
