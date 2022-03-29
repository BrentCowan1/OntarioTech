import { Node } from "@baklavajs/core";
import { INodeState } from "@baklavajs/core/dist/baklavajs-core/types";

export default class CustomNodeWithClass extends Node {
  public type = "CustomNodeWithClass";
  public name = this.type;

  private counter = 0;

  public constructor() {
    super();
    this.addInputInterface("Input", undefined, null, { twoColumn: true });
    this.addOutputInterface("Output", { twoColumn: true });
    this.addOption("Open sidebar", "ButtonOption");
  }

  public load(state: INodeState) {
    super.load(state);
  }

  public action(action: string) {
    if (action === "Add Input") {
      this.addInputInterface("Input " + ++this.counter);
    } else if (action === "Remove Input" && this.counter > 0) {
      this.removeInterface("Input " + this.counter--);
    }
  }
}
