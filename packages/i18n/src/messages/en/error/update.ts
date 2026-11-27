import { defineMessages } from "../../../message";

export const messages = defineMessages("error.update", {
  "error.update.unsupported": "Updates are available in installed desktop builds.",
  "error.update.notReady": "An update is not ready to install.",
  "error.update.restartFailed": "RayaBot could not restart to install the update.",
  "error.update.downloadStalled": "The update download stopped responding. Try again.",
  "error.update.installFailed": "Could not install the update. Quit and reopen RayaBot, then try again.",
  "error.update.notInstalled": "The last restart did not install the update. Restart to try again.",
  "error.update.downloadFailed": "Could not download the update. Try again.",
  "error.update.signatureNotConfirmed":
    "RayaBot could not verify the update. Try again. If this error continues, download RayaBot from openbot.run/download.",
  "error.update.checkFailed": "Could not check for updates. Try again.",
  "error.update.checkStalled": "The update check stopped responding. Try again.",
  "error.update.checkOffline": "Could not reach the update service. Check your internet connection, then try again.",
  "error.update.checkUnavailable":
    "The update service did not answer. RayaBot tries again on its own in a few minutes.",
  "error.update.checkNoRelease":
    "No published update was found for this platform. RayaBot tries again on its own in a few minutes.",
  "error.update.managedByNix": "Nix installs updates for this copy of RayaBot. Update it with Nix.",
  "error.update.managedByHost":
    "Updates on this Mac are installed by the host. The update stays ready until the host's maintenance runs.",
  "error.update.siblingSession":
    "Another RayaBot session is still running from this application. Stop RayaBot in every other macOS user account first, then install the update again.",
  "error.update.siblingSessionSameAccount":
    "Another RayaBot process is still running in this user account. Quit it, then install the update again.",
  "error.update.siblingCheckFailed": "Could not verify other RayaBot sessions. Try again before installing.",
  "error.update.readOnlyLocation":
    "RayaBot cannot install updates from this location. Quit RayaBot. In Finder, drag RayaBot into the Applications folder (if it is already there, drag it out and back in). Then open RayaBot and install the update again.",
  "error.update.appImageMissing":
    "RayaBot cannot install the update because its AppImage file was moved, renamed or replaced. Quit RayaBot, then open the AppImage file again.",
  "error.update.appImageReadOnly":
    "RayaBot cannot install updates in the folder of its AppImage file. Quit RayaBot, move the AppImage file to a folder in your home folder, then open it and install the update again.",
  "error.update.remoteDisabled": "Updates from server admins are turned off on this computer.",
  "error.update.restartStarted": "RayaBot is already restarting to install the update.",
  "error.update.alreadyRestarting": "RayaBot is already restarting.",
});
