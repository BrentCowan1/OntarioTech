import store from "@/store";
import { Node } from "@baklavajs/core";
import { INodeState } from "@baklavajs/core/dist/baklavajs-core/types";

export default class Dialogue extends Node {
  public type = "Dialogue";
  public name = this.type;
  public twoColumn = true;
  public width = 300;

  public updateCharactersList() {
    const names = [
      {
        text: "Narrator",
        value: "Narrator",
      },
      {
        text: store.state.characterNames.client,
        value: "Client",
      },
      {
        text: store.state.characterNames.characterA,
        value: "Character A",
      },
      {
        text: store.state.characterNames.characterB,
        value: "Character B",
      },
      {
        text: store.state.characterNames.characterC,
        value: "Character C",
      },
    ];

    return names;
  }

  public constructor() {
    super();

    const initialNames = this.updateCharactersList();

    this.addInputInterface("Input", undefined, null, { type: "flow" });
    this.addOutputInterface("Output", { type: "flow" });
    this.addOption("CharacterLabel", "TextOption", "Character:");
    this.addOption(
      "Character",
      "SelectOption",
      initialNames[0].value,
      undefined,
      { items: this.updateCharactersList() }
    );
    this.addOption("EmotionLabel", "TextOption", "Client emotion:");
    this.addOption("Emotion", "SelectOption", "Neutral", undefined, {
      items: [
        "Neutral",
        "Afraid",
        "Agitated",
        "Angry",
        "Happy",
        "Phone",
        "Talking",
        "Sad",
        "VerySad",
        "Yelling",
      ],
    });
    this.addOption(
      "Dialogue",
      "DialogueOption",
      { content: "Dialogue text" },
      "SidebarDialogueOption"
    );
    this.addOption("Play audio", "CheckboxOption");
    this.addOption("Audio URL", "InputOption");
  }

  public load(state: INodeState) {
    super.load(state);
  }
}
