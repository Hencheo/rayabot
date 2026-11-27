import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/messaging";

export const messages = {
  "status.messaging.working": "Pracuję nad tym…",
  "status.messaging.queued": "Oczekiwanie na zakończenie wcześniejszego żądania. Odpowiedź pojawi się tutaj.",
  "status.messaging.busy": "Czeka zbyt wiele żądań. Spróbuj ponownie później.",
  "status.messaging.failed": "RayaBot nie mógł dokończyć tego żądania. Szczegóły są na hoście RayaBot.",
  "status.messaging.noAnswer": "RayaBot zakończył pracę bez odpowiedzi tekstowej.",
  "status.messaging.noAgent": "Żaden agent nie może tu jeszcze odpowiadać. Dodaj Slack Orchestrator w RayaBot.",
  "status.messaging.delegated": "Członek zespołu nad tym pracuje. Odpowiedź pojawi się tutaj.",
  "status.messaging.stopped": "Zatrzymano.",
  "status.messaging.stop": "Zatrzymaj",
  "status.messaging.approvalTitle": "RayaBot prosi o zatwierdzenie, aby kontynuować.",
  "status.messaging.approvalTitleTeammate": "Członek zespołu {agent} prosi o zatwierdzenie, aby kontynuować.",
  "status.messaging.approvalCommand": "Uruchomienie polecenia",
  "status.messaging.approvalFileChange": "Zmiana plików",
  "status.messaging.approvalPermissions": "Dodatkowe uprawnienia",
  "status.messaging.approve": "Zatwierdź",
  "status.messaging.deny": "Odrzuć",
  "status.messaging.approvedBy": "Zatwierdzone przez: {user}.",
  "status.messaging.deniedBy": "Odrzucone przez: {user}.",
  "status.messaging.answeredOnHost": "Odpowiedziano na hoście RayaBot.",
  "status.messaging.requestInactive": "To żądanie nie jest już aktywne.",
  "status.messaging.onlyRequester": "Tylko {user} może to zrobić. Może też odpowiedzieć host RayaBot.",
  "status.messaging.hostOnly": "Na to żądanie może odpowiedzieć tylko host RayaBot.",
  "status.messaging.filesSkipped": "Niektóre pliki nie zostały wysłane: {names}.",
  "status.messaging.orchestratorName": "Slack Orchestrator",
  "status.messaging.orchestratorTitle": "Odpowiada w Slacku i pyta zespół",
  "status.messaging.discordNoAgent":
    "Żaden agent nie może tu jeszcze odpowiadać. Dodaj Discord Orchestrator w RayaBot.",
  "status.messaging.discordOrchestratorName": "Discord Orchestrator",
  "status.messaging.discordOrchestratorTitle": "Odpowiada na Discordzie i pyta zespół",
  "status.messaging.integrationsSection": "Integracje",
  "status.messaging.signInReceived": "RayaBot otrzymał instalację Slack. Możesz zamknąć tę kartę.",
  "status.messaging.signInUnknown": "RayaBot nie rozpoczął tej instalacji Slack. Rozpocznij ją ponownie w RayaBot.",
  "status.messaging.telegramNoAgent":
    "Żaden agent nie może tu jeszcze odpowiadać. W RayaBot otwórz Marketplace > Aplikacje > Telegram i kliknij Dodaj agenta.",
  "status.messaging.telegramLinked":
    "RayaBot jest połączony z tym czatem. Oznacz {bot} lub odpowiedz na wiadomość RayaBot, aby zapytać agentów.",
  "status.messaging.telegramNotLinked":
    "RayaBot nie jest połączony z tym czatem. Aby go połączyć, otwórz aplikację RayaBot, przejdź do Marketplace → Aplikacje → Telegram i wybierz „Dodaj do grupy” lub „Otwórz czat prywatny”.",
  "status.messaging.telegramOrchestratorName": "Telegram Orchestrator",
  "status.messaging.telegramOrchestratorTitle": "Odpowiada w Telegramie i pyta zespół",
  "status.messaging.whatsappNoAgent":
    "Żaden agent nie może tu jeszcze odpowiadać. Dodaj WhatsApp Orchestrator w RayaBot.",
  "status.messaging.whatsappApprovalMenu": "Odpowiedz 1, aby zatwierdzić, lub 2, aby odrzucić.",
  "status.messaging.whatsappStopMenu": "Odpowiedz „stop”, aby zatrzymać.",
  "status.messaging.whatsappPairingCode":
    "Ten numer odpowiada tylko osobom, którym pozwolił właściciel. Przekaż właścicielowi ten kod: {code}",
  "status.messaging.whatsappPairingApproved": "Możesz teraz wysyłać prośby na ten numer.",
  "status.messaging.whatsappOwnChat": "Wiadomość do siebie",
  "status.messaging.whatsappWelcomeOwn":
    "👋 *RayaBot jest połączony*\n\nNapisz tutaj, aby poprosić swoich agentów. WhatsApp Orchestrator odpowiada albo przekazuje pracę właściwemu agentowi.\n\nWyślij *stop*, aby zatrzymać prośbę.",
  "status.messaging.whatsappWelcomeDedicated":
    "👋 *RayaBot jest połączony*\n\nOsoby, na które pozwolisz w RayaBot, mogą już pisać na ten numer. Nowa osoba dostaje kod: zatwierdź go w RayaBot w sekcji Prośby.\n\nWyślij *stop*, aby zatrzymać prośbę.",
  "status.messaging.whatsappOtherOpenBot":
    "Z tym numerem WhatsApp jest połączony inny RayaBot, więc możesz dostać dwie odpowiedzi. Aby to naprawić, otwórz Połączone urządzenia w WhatsAppie na telefonie i wyloguj RayaBot, którego nie używasz.",
  "status.messaging.whatsappPaused":
    "RayaBot przestał tu odpowiadać na 10 minut: w krótkim czasie przyszło za dużo wiadomości. Jeśli z tym numerem jest połączony inny RayaBot, otwórz Połączone urządzenia w WhatsAppie na telefonie i wyloguj RayaBot, którego nie używasz.",
  "status.messaging.whatsappNotDelivered": "WhatsApp nie przyjął tej odpowiedzi, więc ta osoba jej nie dostała.",
  "status.messaging.whatsappPartlyDelivered":
    "WhatsApp nie przyjął całej tej odpowiedzi, więc ta osoba dostała tylko jej część.",
  "status.messaging.whatsappOrchestratorName": "WhatsApp Orchestrator",
  "status.messaging.whatsappOrchestratorTitle": "Odpowiada w WhatsApp i pyta zespół",
} as const satisfies PartialTranslation<typeof source>;
