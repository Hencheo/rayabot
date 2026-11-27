import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "RayaBot – Hôte local",
  "window.localClientTitle": "RayaBot – Client local",
  "window.computerUsePermissionTitle": "Activer Computer Use",
  "window.rendererStoppedTitle": "RayaBot ne fonctionne plus",
  "window.rendererStoppedBody":
    "La fenêtre s’est arrêtée plusieurs fois. Vos discussions sont enregistrées et vos agents continuent de travailler.",
  "window.rendererStoppedReload": "Recharger",
} as const satisfies PartialTranslation<typeof source>;
