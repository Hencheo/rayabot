import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "Lokaler RayaBot-Host",
  "window.localClientTitle": "Lokaler RayaBot-Client",
  "window.computerUsePermissionTitle": "Computersteuerung aktivieren",
  "window.rendererStoppedTitle": "RayaBot funktioniert nicht mehr",
  "window.rendererStoppedBody":
    "Das Fenster wurde mehrmals beendet. Deine Chats sind gespeichert, und deine Agenten arbeiten weiter.",
  "window.rendererStoppedReload": "Neu laden",
} as const satisfies PartialTranslation<typeof source>;
