import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "RayaBot – lokalny host",
  "window.localClientTitle": "RayaBot – lokalny klient",
  "window.computerUsePermissionTitle": "Włącz Sterowanie komputerem",
  "window.rendererStoppedTitle": "RayaBot przestał działać",
  "window.rendererStoppedBody": "Okno kilka razy przestało działać. Twoje czaty są zapisane, a agenci dalej pracują.",
  "window.rendererStoppedReload": "Wczytaj ponownie",
} as const satisfies PartialTranslation<typeof source>;
