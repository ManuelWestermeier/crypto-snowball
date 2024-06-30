import useApp from "./hooks/use-app";

export default function App() {
  const [client, clientState, reconnectClient] = useApp();

  if (clientState === "failed") {
    return (
      <button onClick={() => reconnectClient()}>
        Reconnect
      </button>
    );
  }

  if (clientState === "loading") {
    return (
      <div className="loading-spinner">
        Loading...
      </div>
    );
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