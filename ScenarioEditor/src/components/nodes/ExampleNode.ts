import { NodeBuilder } from "@baklavajs/core";

export default new NodeBuilder("ExampleNode", {
  twoColumn: true,
  width: 250,
})
  .addInputInterface("Input")
  .addInputInterface("Number 1", "NumberOption", 1)
  .addOutputInterface("Output")
  // list of prebuilt options: ButtonOption, CheckboxOption, InputOption, IntegerOption, NumberOption, SelectOption, SliderOption, TextOption
  .addOption("Checkbox", "CheckboxOption")
  .addOption("Input", "InputOption")
  .addOption("Integer", "IntegerOption")
  .addOption("Number", "NumberOption")
  .addOption("Select", "SelectOption", "Item 1", undefined, {
    items: ["Item 1", "Item 2"],
  })
  .addOption("Slider", "SliderOption")
  .addOption("Text", "TextOption", "Default value")
  // "ButtonOption" is a prebuilt option that will open the sidebar when clicked
  .addOption("Open sidebar", "ButtonOption")
  .addOption(
    "SidebarTest",
    "ButtonOption",
    () => ({ testtext: "this is a test" }),
    "SidebarOption"
  )
  .build();
