import ClientErrors from "./comp/client-errors";
import useApp from "./hooks/use-app";

export default function App() {
  const [client, clientState, reconnectClient, isClosed] = useApp();

  if (clientState != "sucess") {
    return <ClientErrors
      client={client}
      clientState={clientState}
      isClosed={isClosed}
      reconnectClient={reconnectClient}
    />
  }

  return (
    <div>
      App
      <button onClick={() => client?.close()}>
        Clonse Client
      </button>
    </div>
  );
}