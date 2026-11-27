import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/host";

export const messages = {
  "status.host.registered": "ה-RayaBot הזה נרשם לגישת WebRTC.",
  "status.host.keyRotated": "מפתח השרת השתנה. המכשירים המותאמים נשארים מותאמים.",
  "status.host.identityUpdated": "זהות השרת עודכנה.",
  "status.host.starting": "מפעיל את מארח ה-WebRTC…",
  "status.host.ready": "ה-RayaBot הזה מוכן לחיבורי WebRTC.",
  "status.host.signalLost": "מכשירים אחרים לא יכולים להגיע ל-RayaBot הזה כרגע. הוא מתחבר שוב.",
  "status.host.stopping": "הופך את ה-RayaBot הזה לפרטי…",
  "status.host.private": "ה-RayaBot הזה פרטי.",
  "status.host.removed": "ה-RayaBot הזה הוסר מהחשבון שלך. יש לפרסם אותו שוב כדי לשתף אותו.",
} as const satisfies PartialTranslation<typeof source>;
