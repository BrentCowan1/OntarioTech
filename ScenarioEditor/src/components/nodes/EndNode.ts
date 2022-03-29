import { NodeBuilder } from "@baklavajs/core";

export default new NodeBuilder("End", {
  twoColumn: true,
  width: 200,
})
  .addInputInterface("Input", undefined, null, { type: "flow" })
  // .addOption("Define reason", "ButtonOption", () => ({}), "SidebarEndOption")
  .addOption("Allow retry", "CheckboxOption")
  // .addOption("Retry position", "SelectOption", "From the start", undefined, {
  //   items: ["From the start", "From current question"],
  // })
  .addOption("Play audio", "CheckboxOption")
  .addOption("Audio URL", "InputOption")
  .build();
