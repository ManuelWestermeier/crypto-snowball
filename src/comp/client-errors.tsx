import { Status } from "wsnet-client-react";
import Client from "wsnet-client";

export default function ClientErrors({ client, clientState, isClosed, reconnectClient }: {
    client: null | Client;
    clientState: Status;
    isClosed: boolean;
    reconnectClient: () => Promise<void>
}) {
    if (clientState === "failed" || isClosed) {
        return (
            <button onClick={() => {
                reconnectClient()
            }}>
                [{clientState as string}] Reconnect
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

    if (!client) {
        return "no client set"
    }
}
