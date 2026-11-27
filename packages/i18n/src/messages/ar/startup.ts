import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/startup";

export const messages = {
  "startup.failedTitle": "تعذّر بدء تشغيل RayaBot",
  "startup.failedBody":
    "{message}\n\nلم تُعَد تعيين بياناتك المحلية ولم يُكتب فوقها. راجع دليل استكشاف الأخطاء وإصلاحها لمعرفة خطوات الاسترداد.",
  "startup.archiveChangedTitle": "تم تغيير ملفات RayaBot",
  "startup.archiveChangedBody":
    "غيّر برنامج آخر ملف RayaBot المسمى app.asar. يعمل RayaBot الآن، لكنه لن يفتح بعد إنهائه.\n\nلإصلاح RayaBot، ثبّته من جديد. تبقى بياناتك المحلية.",
  "startup.archiveChangedDownload": "تنزيل RayaBot",
  "startup.filesDamagedBody":
    "بعض ملفات RayaBot تالفة أو مفقودة.\n\nلإصلاح RayaBot، ثبّته من جديد. تبقى بياناتك المحلية.",
  "startup.newerDataUpdatingTitle": "جارٍ تحديث RayaBot",
  "startup.newerDataUpdatingBody":
    "حفظ إصدار أحدث من RayaBot بياناتك. يثبّت RayaBot أحدث إصدار ثم يفتح مرة أخرى.\n\nلم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
  "startup.newerDataTitle": "ثبّت أحدث إصدار من RayaBot",
  "startup.newerDataBody":
    "حفظ إصدار أحدث من RayaBot بياناتك، ولا يستطيع هذا الإصدار ({version}) فتحها. ثبّت أحدث إصدار لفتح بياناتك.\n\nلم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
  "startup.newerDataDownload": "تنزيل RayaBot",
  "startup.newerDataGuide": "فتح الدليل",
  "startup.newerDataQuit": "إنهاء",
  "startup.newerDataLoopTitle": "لم يُفتح أحدث إصدار من RayaBot",
  "startup.newerDataLoopBody":
    "حفظ إصدار أحدث من RayaBot بياناتك، ولا يستطيع هذا الإصدار ({version}) فتحها. توقف RayaBot {loopVersion} قبل أن يُفتح عدة مرات متتالية، لذلك لن يُثبَّت مرة أخرى.\n\nثبّت إصدارًا أحدث من {loopVersion} عندما يتوفر. للحصول على المساعدة، افتح الدليل.\n\nلم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
  "startup.newerDataReleases": "عرض الإصدارات",
  "startup.recoveryWindowTitle": "استرداد RayaBot",
  "startup.recoveryTitle": "لم يُفتح RayaBot",
  "startup.recoveryBody": {
    zero: "توقف RayaBot {version} قبل أن يُفتح {count} مرة متتالية. لم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
    one: "توقف RayaBot {version} قبل أن يُفتح مرة واحدة ({count}). لم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
    two: "توقف RayaBot {version} قبل أن يُفتح مرتين متتاليتين ({count}). لم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
    few: "توقف RayaBot {version} قبل أن يُفتح {count} مرات متتالية. لم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
    many: "توقف RayaBot {version} قبل أن يُفتح {count} مرة متتالية. لم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
    other:
      "توقف RayaBot {version} قبل أن يُفتح {count} مرة متتالية. لم تتم إعادة تعيين بياناتك المحلية أو الكتابة فوقها.",
  },
  "startup.recoveryHint":
    "أعد المحاولة، أو ثبّت آخر إصدار فُتح. للحصول على المساعدة، صدّر بيانات التشخيص وأرسل الملف مع بلاغك.",
  "startup.recoveryHintLatest":
    "لم يجد RayaBot إصدارًا سابقًا يستطيع فتح بياناتك. أعد المحاولة، أو ثبّت أحدث إصدار. للحصول على المساعدة، صدّر بيانات التشخيص وأرسل الملف مع بلاغك.",
  "startup.recoveryRetry": "إعادة المحاولة",
  "startup.recoveryPreviousVersion": "تنزيل الإصدار السابق",
  "startup.recoveryLatestVersion": "تنزيل أحدث إصدار",
  "startup.recoveryExportDiagnostics": "تصدير التشخيص",
  "startup.recoveryOpenDataFolder": "فتح مجلد البيانات",
  "startup.recoveryQuit": "إنهاء",
  "startup.recoveryDiagnosticsSaved": "تم حفظ ملف التشخيص.",
  "startup.recoveryActionFailed": "تعذّر على RayaBot تنفيذ هذا الإجراء.",
} as const satisfies PartialTranslation<typeof source>;
