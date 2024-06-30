import useLocalStorage from "use-local-storage";
import { useClient } from "wsnet-client-react";
import Client from "wsnet-client";

export default function useApp() {
    const [auth, setAuth] = useLocalStorage("crypto-snowball-auth", []);

    const [client, clientState, reconnectClient, isClosed] = useClient(() => {
        const wsUrl = document.location.protocol === "http:" ?
            "ws://localhost:8080" : "wss://your-secure-websocket-url";
        return new Client(wsUrl);
    });

    return [client, clientState, reconnectClient, isClosed, auth, setAuth] as const;
}