import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/app";

export const messages = {
  "error.app.externalLinkProtocol": "Harici tarayıcıda yalnızca HTTP(S) bağlantıları açılabilir.",
  "error.app.notificationsUnsupported": "Bu sistem masaüstü bildirimlerini desteklemiyor.",
  "error.app.notificationSettingsMissing": "Bu sistemin bildirim ayarları sayfası yok.",
  "error.app.notReady": "RayaBot hazır değil.",
  "error.app.macSecureStorageUnavailable": "macOS güvenli depolaması kullanılamıyor.",
  "error.app.secretStorageUnavailable": "Sistem gizli anahtar depolaması kullanılamıyor.",
  "error.app.remoteIdentityUnavailable": "Uzak ana makine kimliği kullanılamıyor.",
  "error.app.iceServersMissing": "Remote Signal henüz ICE sunucularını sağlamadı.",
  "error.app.finishLocalTest": "Ekranları değiştirmeden önce yerel testi bitirin.",
  "error.app.windowBlockedBySecuritySoftware":
    "Bu bilgisayardaki güvenlik yazılımı muhtemelen RayaBot penceresini durdurdu. Güvenlik yazılımınızda, örneğin Kaspersky'de, RayaBot.exe dosyasını güvenilir uygulama olarak ekleyin. Ardından RayaBot'u yeniden başlatın.",
} as const satisfies PartialTranslation<typeof source>;
