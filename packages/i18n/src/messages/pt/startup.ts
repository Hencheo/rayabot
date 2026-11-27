import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "O RayaBot não conseguiu iniciar",
  "startup.failedBody":
    "{message}\n\nSeus dados locais não foram redefinidos nem sobrescritos. Consulte o guia de solução de problemas para ver os passos de recuperação.",
  "startup.archiveChangedTitle": "Arquivos do RayaBot foram alterados",
  "startup.archiveChangedBody":
    "Outro programa alterou o arquivo app.asar do RayaBot. O RayaBot funciona agora, mas não vai abrir depois que você fechá-lo.\n\nPara reparar, instale o RayaBot novamente. Seus dados locais são mantidos.",
  "startup.archiveChangedDownload": "Baixar RayaBot",
  "startup.filesDamagedBody":
    "Alguns arquivos do RayaBot estão danificados ou faltando.\n\nPara reparar, instale o RayaBot novamente. Seus dados locais são mantidos.",
  "startup.newerDataUpdatingTitle": "Atualizando o RayaBot",
  "startup.newerDataUpdatingBody":
    "Uma versão mais recente do RayaBot salvou seus dados. O RayaBot instala a versão mais recente e depois abre de novo.\n\nSeus dados locais não foram redefinidos nem substituídos.",
  "startup.newerDataTitle": "Instale o RayaBot mais recente",
  "startup.newerDataBody":
    "Uma versão mais recente do RayaBot salvou seus dados, e esta versão ({version}) não consegue abri-los. Instale a versão mais recente para abrir seus dados.\n\nSeus dados locais não foram redefinidos nem substituídos.",
  "startup.newerDataDownload": "Baixar RayaBot",
  "startup.newerDataGuide": "Abrir guia",
  "startup.newerDataQuit": "Sair",
  "startup.newerDataLoopTitle": "A versão mais recente do RayaBot não abriu",
  "startup.newerDataLoopBody":
    "Uma versão mais recente do RayaBot salvou seus dados, e esta versão ({version}) não consegue abri-los. O RayaBot {loopVersion} parou antes de abrir várias vezes seguidas, então ele não será instalado de novo.\n\nInstale uma versão mais recente que a {loopVersion} quando houver uma disponível. Para obter ajuda, abra o guia.\n\nSeus dados locais não foram redefinidos nem substituídos.",
  "startup.newerDataReleases": "Ver versões",
  "startup.recoveryWindowTitle": "Recuperação do RayaBot",
  "startup.recoveryTitle": "O RayaBot não abriu",
  "startup.recoveryBody": {
    one: "O RayaBot {version} parou antes de abrir, {count} vez seguida. Seus dados locais não foram redefinidos nem substituídos.",
    other:
      "O RayaBot {version} parou antes de abrir, {count} vezes seguidas. Seus dados locais não foram redefinidos nem substituídos.",
  },
  "startup.recoveryHint":
    "Tente novamente ou instale a última versão que abriu. Para obter ajuda, exporte o diagnóstico e envie o arquivo com seu relato.",
  "startup.recoveryHintLatest":
    "O RayaBot não encontrou uma versão anterior que consiga abrir seus dados. Tente novamente ou instale a versão mais recente. Para obter ajuda, exporte o diagnóstico e envie o arquivo com seu relato.",
  "startup.recoveryRetry": "Tentar de novo",
  "startup.recoveryPreviousVersion": "Baixar versão anterior",
  "startup.recoveryLatestVersion": "Baixar versão mais recente",
  "startup.recoveryExportDiagnostics": "Exportar diagnóstico",
  "startup.recoveryOpenDataFolder": "Abrir pasta de dados",
  "startup.recoveryQuit": "Sair",
  "startup.recoveryDiagnosticsSaved": "O arquivo de diagnóstico foi salvo.",
  "startup.recoveryActionFailed": "O RayaBot não conseguiu fazer esta ação.",
} as const satisfies PartialTranslation<typeof source>;
