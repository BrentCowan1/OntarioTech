import { NodeBuilder } from "@baklavajs/core";

export default new NodeBuilder("Decision point", {
  twoColumn: true,
  width: 300,
})
  .addInputInterface("Input", undefined, null, { type: "flow" })
  .addOutputInterface("Choice 1", { type: "decision" })
  .addOutputInterface("Choice 2", { type: "decision" })
  .addOutputInterface("Choice 3", { type: "decision" })
  .addOutputInterface("Choice 4", { type: "decision" })
  .addOutputInterface("Choice 5", { type: "decision" })
  .addOption(
    "Dialogue",
    "DialogueOption",
    () => ({ content: "Decision point text" }),
    "SidebarDialogueOption"
  )
  .addOption("Choices", "ButtonOption", () => ({}), "SidebarChoicesOption")
  .addOption("Play audio", "CheckboxOption")
  .addOption("Audio URL", "InputOption")
  .build();
