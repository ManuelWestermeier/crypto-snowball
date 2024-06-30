import useApp from "./hooks/use-app"

export default function App() {
  const [client, clientState] = useApp()

  return (
    <div>App {clientState}</div>
  )
}