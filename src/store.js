import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

// Create your SyncedStore store
export const store = syncedStore({ todos: [], fragment: "xml" });

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();
