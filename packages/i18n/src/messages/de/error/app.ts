import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/app";

export const messages = {
  "error.app.externalLinkProtocol": "Im externen Browser können nur HTTP(S)-Links geöffnet werden.",
  "error.app.notificationsUnsupported": "Dieses System unterstützt keine Desktop-Benachrichtigungen.",
  "error.app.notificationSettingsMissing": "Dieses System hat keine Seite für Benachrichtigungseinstellungen.",
  "error.app.notReady": "RayaBot ist nicht bereit.",
  "error.app.macSecureStorageUnavailable": "Der sichere Speicher von macOS ist nicht verfügbar.",
  "error.app.secretStorageUnavailable": "Der Systemspeicher für Geheimnisse ist nicht verfügbar.",
  "error.app.remoteIdentityUnavailable": "Die Identität des entfernten Hosts ist nicht verfügbar.",
  "error.app.iceServersMissing": "Remote Signal hat noch keine ICE-Server bereitgestellt.",
  "error.app.finishLocalTest": "Beende den lokalen Test, bevor du den Bildschirm wechselst.",
  "error.app.windowBlockedBySecuritySoftware":
    "Sicherheitssoftware auf diesem Computer hat wahrscheinlich das RayaBot-Fenster gestoppt. Füge RayaBot.exe in deiner Sicherheitssoftware, zum Beispiel Kaspersky, als vertrauenswürdige Anwendung hinzu. Starte RayaBot dann erneut.",
} as const satisfies PartialTranslation<typeof source>;
