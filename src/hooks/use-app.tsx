import useLocalStorage from "use-local-storage";
import { useClient } from "wsnet-client-react";
import Client from "wsnet-client";

export default function useApp() {
    const [auth, setAuth] = useLocalStorage("crypto-snowball-auth", [])
    const [client, clientState] = useClient(() => {
        return new Client(document.location.protocol == "http:" ? 
            "ws://localhost:8080" : "")
    })

    return [client, clientState, auth, setAuth]
}
