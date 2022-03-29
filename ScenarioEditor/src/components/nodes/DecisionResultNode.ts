import { NodeBuilder } from "@baklavajs/core";

export default new NodeBuilder("Decision result", {
  twoColumn: true,
  width: 250,
})
  .addInputInterface("Input", undefined, null, { type: "decision" })
  .addOutputInterface("Output", { type: "flow" })
  .addOption("Correct?", "CheckboxOption")
  .addOption("Value", "IntegerOption")
  .addOption(
    "Dialogue",
    "DialogueOption",
    () => ({ content: "Feedback text" }),
    "SidebarDialogueOption"
  )
  .addOption("Play audio", "CheckboxOption")
  .addOption("Audio URL", "InputOption")
  .build();
