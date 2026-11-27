import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "RayaBot başlatılamadı",
  "startup.failedBody":
    "{message}\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı. Kurtarma adımları için sorun giderme kılavuzuna bakın.",
  "startup.archiveChangedTitle": "RayaBot dosyaları değiştirildi",
  "startup.archiveChangedBody":
    "Başka bir program RayaBot’un app.asar dosyasını değiştirdi. RayaBot şu an çalışıyor, ancak kapattıktan sonra açılmayacak.\n\nOnarmak için RayaBot’u yeniden yükleyin. Yerel verileriniz korunur.",
  "startup.archiveChangedDownload": "RayaBot’u indir",
  "startup.filesDamagedBody":
    "Bazı RayaBot dosyaları hasarlı veya eksik.\n\nOnarmak için RayaBot’u yeniden yükleyin. Yerel verileriniz korunur.",
  "startup.newerDataUpdatingTitle": "RayaBot güncelleniyor",
  "startup.newerDataUpdatingBody":
    "RayaBot’un daha yeni bir sürümü verilerinizi kaydetti. RayaBot en son sürümü yüklüyor ve ardından yeniden açılacak.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataTitle": "En son RayaBot’u yükleyin",
  "startup.newerDataBody":
    "RayaBot’un daha yeni bir sürümü verilerinizi kaydetti ve bu sürüm ({version}) onları açamıyor. Verilerinizi açmak için en son sürümü yükleyin.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataDownload": "RayaBot’u indir",
  "startup.newerDataGuide": "Kılavuzu aç",
  "startup.newerDataQuit": "Çık",
  "startup.newerDataLoopTitle": "En son RayaBot açılmadı",
  "startup.newerDataLoopBody":
    "RayaBot’un daha yeni bir sürümü verilerinizi kaydetti ve bu sürüm ({version}) onları açamıyor. RayaBot {loopVersion} art arda birkaç kez açılmadan durdu, bu yüzden yeniden yüklenmiyor.\n\n{loopVersion} sürümünden daha yeni bir sürüm çıktığında onu yükleyin. Yardım almak için kılavuzu açın.\n\nYerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  "startup.newerDataReleases": "Sürümleri göster",
  "startup.recoveryWindowTitle": "RayaBot kurtarma",
  "startup.recoveryTitle": "RayaBot açılmadı",
  "startup.recoveryBody": {
    one: "RayaBot {version}, açılmadan önce art arda {count} kez durdu. Yerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
    other:
      "RayaBot {version}, açılmadan önce art arda {count} kez durdu. Yerel verileriniz sıfırlanmadı veya üzerine yazılmadı.",
  },
  "startup.recoveryHint":
    "Yeniden deneyin veya açılan son sürümü yükleyin. Yardım almak için tanılamayı dışa aktarın ve dosyayı raporunuzla gönderin.",
  "startup.recoveryHintLatest":
    "RayaBot verilerinizi açabilen daha eski bir sürüm bulamadı. Yeniden deneyin veya en son sürümü yükleyin. Yardım almak için tanılamayı dışa aktarın ve dosyayı raporunuzla gönderin.",
  "startup.recoveryRetry": "Yeniden dene",
  "startup.recoveryPreviousVersion": "Önceki sürümü indir",
  "startup.recoveryLatestVersion": "En son sürümü indir",
  "startup.recoveryExportDiagnostics": "Tanılamayı dışa aktar",
  "startup.recoveryOpenDataFolder": "Veri klasörünü aç",
  "startup.recoveryQuit": "Çık",
  "startup.recoveryDiagnosticsSaved": "Tanılama dosyası kaydedildi.",
  "startup.recoveryActionFailed": "RayaBot bu işlemi yapamadı.",
} as const satisfies PartialTranslation<typeof source>;
