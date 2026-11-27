import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "Nie udało się uruchomić RayaBot",
  "startup.failedBody":
    "{message}\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane. Kroki przywracania znajdziesz w przewodniku rozwiązywania problemów.",
  "startup.archiveChangedTitle": "Pliki RayaBot zostały zmienione",
  "startup.archiveChangedBody":
    "Inny program zmienił plik app.asar RayaBot. RayaBot działa teraz, ale nie uruchomi się po zamknięciu.\n\nAby naprawić RayaBot, zainstaluj go ponownie. Twoje lokalne dane zostaną zachowane.",
  "startup.archiveChangedDownload": "Pobierz RayaBot",
  "startup.filesDamagedBody":
    "Niektóre pliki RayaBot są uszkodzone lub ich brakuje.\n\nAby naprawić RayaBot, zainstaluj go ponownie. Twoje lokalne dane zostaną zachowane.",
  "startup.newerDataUpdatingTitle": "Aktualizowanie RayaBot",
  "startup.newerDataUpdatingBody":
    "Nowsza wersja RayaBot zapisała Twoje dane. RayaBot instaluje najnowszą wersję, a potem uruchomi się ponownie.\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane.",
  "startup.newerDataTitle": "Zainstaluj najnowszy RayaBot",
  "startup.newerDataBody":
    "Nowsza wersja RayaBot zapisała Twoje dane, a ta wersja ({version}) nie może ich otworzyć. Zainstaluj najnowszą wersję, aby otworzyć swoje dane.\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane.",
  "startup.newerDataDownload": "Pobierz RayaBot",
  "startup.newerDataGuide": "Otwórz przewodnik",
  "startup.newerDataQuit": "Zakończ",
  "startup.newerDataLoopTitle": "Najnowszy RayaBot się nie otworzył",
  "startup.newerDataLoopBody":
    "Nowsza wersja RayaBot zapisała Twoje dane, a ta wersja ({version}) nie może ich otworzyć. RayaBot {loopVersion} kilka razy z rzędu zatrzymał się przed otwarciem, więc nie zostanie zainstalowany ponownie.\n\nZainstaluj wersję nowszą niż {loopVersion}, gdy będzie dostępna. Aby uzyskać pomoc, otwórz przewodnik.\n\nTwoje lokalne dane nie zostały zresetowane ani nadpisane.",
  "startup.newerDataReleases": "Pokaż wydania",
  "startup.recoveryWindowTitle": "Odzyskiwanie RayaBot",
  "startup.recoveryTitle": "RayaBot się nie otworzył",
  "startup.recoveryBody": {
    one: "RayaBot {version} zatrzymał się przed otwarciem {count} raz z rzędu. Twoje lokalne dane nie zostały zresetowane ani nadpisane.",
    few: "RayaBot {version} zatrzymał się przed otwarciem {count} razy z rzędu. Twoje lokalne dane nie zostały zresetowane ani nadpisane.",
    many: "RayaBot {version} zatrzymał się przed otwarciem {count} razy z rzędu. Twoje lokalne dane nie zostały zresetowane ani nadpisane.",
    other:
      "RayaBot {version} zatrzymał się przed otwarciem {count} razy z rzędu. Twoje lokalne dane nie zostały zresetowane ani nadpisane.",
  },
  "startup.recoveryHint":
    "Spróbuj ponownie albo zainstaluj ostatnią wersję, która się otwierała. Aby uzyskać pomoc, wyeksportuj diagnostykę i wyślij plik ze zgłoszeniem.",
  "startup.recoveryHintLatest":
    "RayaBot nie znalazł wcześniejszej wersji, która może otworzyć Twoje dane. Spróbuj ponownie albo zainstaluj najnowszą wersję. Aby uzyskać pomoc, wyeksportuj diagnostykę i wyślij plik ze zgłoszeniem.",
  "startup.recoveryRetry": "Spróbuj ponownie",
  "startup.recoveryPreviousVersion": "Pobierz poprzednią wersję",
  "startup.recoveryLatestVersion": "Pobierz najnowszą wersję",
  "startup.recoveryExportDiagnostics": "Eksportuj diagnostykę",
  "startup.recoveryOpenDataFolder": "Otwórz folder danych",
  "startup.recoveryQuit": "Zakończ",
  "startup.recoveryDiagnosticsSaved": "Plik diagnostyki został zapisany.",
  "startup.recoveryActionFailed": "RayaBot nie mógł wykonać tej czynności.",
} as const satisfies PartialTranslation<typeof source>;
