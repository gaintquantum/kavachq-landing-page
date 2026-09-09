import { botData, initialBotMessage } from "./botData";

export function getBotStep(step) {
  if (step === "welcome") {
    return initialBotMessage;
  }

  return botData[step] || initialBotMessage;
}