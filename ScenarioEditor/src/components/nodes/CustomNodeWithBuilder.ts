import { NodeBuilder } from "@baklavajs/core";

export default new NodeBuilder("CustomNodeWithBuilder", {
  twoColumn: true,
  width: 200,
})
  .addInputInterface("Input")
  .addOutputInterface("Output")
  .addOption("Open sidebar", "ButtonOption")
  .addOption(
    "SidebarTest",
    "ButtonOption",
    () => ({ testtext: "any" }),
    "MySidebarOption"
  )
  .build();
