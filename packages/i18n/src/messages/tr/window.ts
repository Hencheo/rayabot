import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "RayaBot Yerel Ana Makine",
  "window.localClientTitle": "RayaBot Yerel İstemci",
  "window.computerUsePermissionTitle": "Bilgisayar Kullanımını aç",
  "window.rendererStoppedTitle": "RayaBot çalışmayı durdurdu",
  "window.rendererStoppedBody":
    "Pencere birkaç kez durdu. Sohbetleriniz kaydedildi ve ajanlarınız çalışmaya devam ediyor.",
  "window.rendererStoppedReload": "Yeniden yükle",
} as const satisfies PartialTranslation<typeof source>;
