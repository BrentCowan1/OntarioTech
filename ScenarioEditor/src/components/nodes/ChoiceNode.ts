import { NodeBuilder } from "@baklavajs/core";

export default new NodeBuilder("ChoiceNode", {
  twoColumn: true,
  width: 200,
})
  .addInputInterface("Input", undefined, null, { type: "flow" })
  .addOutputInterface("Output", { type: "flow" })
  // list of prebuilt options: ButtonOption, CheckboxOption, InputOption, IntegerOption, NumberOption, SelectOption, SliderOption, TextOption
  .addOption("Text", "InputOption", "Choice text")
  // .addOption("Text", "TextOption", "Default value")
  // "ButtonOption" is a prebuilt option that will open the sidebar when clicked
  .build();
