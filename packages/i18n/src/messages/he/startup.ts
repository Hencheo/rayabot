import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "RayaBot לא הצליח להיפתח",
  "startup.failedBody":
    "{message}\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו. בצעדי השחזור שבמדריך לפתרון בעיות אפשר לקרוא איך להמשיך.",
  "startup.archiveChangedTitle": "קובצי RayaBot שונו",
  "startup.archiveChangedBody":
    "תוכנה אחרת שינתה את קובץ RayaBot app.asar. RayaBot פועל כעת, אך לא ייפתח לאחר היציאה ממנו.\n\nכדי לתקן את RayaBot, יש להתקין אותו מחדש. הנתונים המקומיים נשמרים.",
  "startup.archiveChangedDownload": "הורדת RayaBot",
  "startup.filesDamagedBody":
    "חלק מקובצי RayaBot פגומים או חסרים.\n\nכדי לתקן את RayaBot, יש להתקין אותו מחדש. הנתונים המקומיים נשמרים.",
  "startup.newerDataUpdatingTitle": "RayaBot מתעדכן",
  "startup.newerDataUpdatingBody":
    "גרסה חדשה יותר של RayaBot שמרה את הנתונים שלך. RayaBot מתקין את הגרסה האחרונה ואז נפתח מחדש.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataTitle": "התקנת RayaBot העדכני ביותר",
  "startup.newerDataBody":
    "גרסה חדשה יותר של RayaBot שמרה את הנתונים שלך, והגרסה הזו ({version}) אינה יכולה לפתוח אותם. יש להתקין את הגרסה האחרונה כדי לפתוח את הנתונים.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataDownload": "הורדת RayaBot",
  "startup.newerDataGuide": "פתיחת המדריך",
  "startup.newerDataQuit": "יציאה",
  "startup.newerDataLoopTitle": "הגרסה האחרונה של RayaBot לא נפתחה",
  "startup.newerDataLoopBody":
    "גרסה חדשה יותר של RayaBot שמרה את הנתונים שלך, והגרסה הזו ({version}) אינה יכולה לפתוח אותם. RayaBot {loopVersion} נעצר לפני שנפתח כמה פעמים ברצף, ולכן הוא לא יותקן שוב.\n\nיש להתקין גרסה חדשה יותר מ-{loopVersion} כשתהיה זמינה. לקבלת עזרה, יש לפתוח את המדריך.\n\nהנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  "startup.newerDataReleases": "הצגת הגרסאות",
  "startup.recoveryWindowTitle": "שחזור RayaBot",
  "startup.recoveryTitle": "RayaBot לא נפתח",
  "startup.recoveryBody": {
    one: "RayaBot {version} נעצר לפני שנפתח, פעם אחת ({count}). הנתונים המקומיים שלך לא אופסו ולא נדרסו.",
    two: "RayaBot {version} נעצר לפני שנפתח, פעמיים ברצף ({count}). הנתונים המקומיים שלך לא אופסו ולא נדרסו.",
    other: "RayaBot {version} נעצר לפני שנפתח, {count} פעמים ברצף. הנתונים המקומיים שלך לא אופסו ולא נדרסו.",
  },
  "startup.recoveryHint":
    "נסה שוב, או התקן את הגרסה האחרונה שנפתחה. לקבלת עזרה, ייצא את נתוני האבחון ושלח את הקובץ עם הדיווח שלך.",
  "startup.recoveryHintLatest":
    "RayaBot לא מצא גרסה קודמת שיכולה לפתוח את הנתונים שלך. נסה שוב, או התקן את הגרסה האחרונה. לקבלת עזרה, ייצא את נתוני האבחון ושלח את הקובץ עם הדיווח שלך.",
  "startup.recoveryRetry": "נסה שוב",
  "startup.recoveryPreviousVersion": "הורדת הגרסה הקודמת",
  "startup.recoveryLatestVersion": "הורדת הגרסה האחרונה",
  "startup.recoveryExportDiagnostics": "ייצוא אבחון",
  "startup.recoveryOpenDataFolder": "פתיחת תיקיית הנתונים",
  "startup.recoveryQuit": "יציאה",
  "startup.recoveryDiagnosticsSaved": "קובץ האבחון נשמר.",
  "startup.recoveryActionFailed": "RayaBot לא הצליח לבצע את הפעולה הזו.",
} as const satisfies PartialTranslation<typeof source>;
