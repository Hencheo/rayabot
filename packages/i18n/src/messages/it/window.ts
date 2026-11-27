import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "RayaBot — host locale",
  "window.localClientTitle": "RayaBot — client locale",
  "window.computerUsePermissionTitle": "Attiva il Controllo del computer",
  "window.rendererStoppedTitle": "RayaBot ha smesso di funzionare",
  "window.rendererStoppedBody":
    "La finestra si è fermata più volte. Le tue chat sono salvate e i tuoi agenti continuano a lavorare.",
  "window.rendererStoppedReload": "Ricarica",
} as const satisfies PartialTranslation<typeof source>;
