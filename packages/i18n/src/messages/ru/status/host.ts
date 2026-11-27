import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/host";

export const messages = {
  "status.host.registered": "Этот RayaBot зарегистрирован для доступа через WebRTC.",
  "status.host.keyRotated": "Ключ сервера изменён. Связанные устройства остаются связанными.",
  "status.host.identityUpdated": "Идентификатор сервера обновлён.",
  "status.host.starting": "Запуск хоста WebRTC…",
  "status.host.ready": "Этот RayaBot готов к подключениям WebRTC.",
  "status.host.signalLost": "Другие устройства сейчас не могут подключиться к этому RayaBot. Он подключается снова.",
  "status.host.stopping": "Перевод этого RayaBot в приватный режим…",
  "status.host.private": "Этот RayaBot приватный.",
  "status.host.removed": "Этот RayaBot удалён из вашего аккаунта. Опубликуйте его снова, чтобы открыть доступ.",
} as const satisfies PartialTranslation<typeof source>;
