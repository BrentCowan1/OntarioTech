import store from "@/store";
import { Node } from "@baklavajs/core";
import { INodeState } from "@baklavajs/core/dist/baklavajs-core/types";

export default class Dialogue extends Node {
  public type = "Dialogue";
  public name = this.type;
  public twoColumn = true;
  public width = 300;

  public addEmotionNotAvailable() {
    return this.addOption(
      "EmotionNotAvailable",
      "WarningTextOption",
      "Emotion is disabled for the 'Narrator' character."
    );
  }
  public removeEmotionNotAvailable() {
    return this.removeOption("EmotionNotAvailable");
  }

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
    const characterSelect = this.addOption(
      "Character",
      "SelectOption",
      initialNames[0].value,
      undefined,
      { items: this.updateCharactersList() }
    );
    this.addOption("EmotionLabel", "TextOption", "Emotion:");
    this.addOption("Emotion", "SelectOption", "Neutral", undefined, {
      items: [
        "Neutral",
        "Agreeing",
        "Agitated",
        "Angry",
        "ArmsCrossing",
        "Defeat",
        "Afraid",
        "Yelling",
        "YellingOut",
        "Happy",
        "HappyHandGesture",
        "HardHeadNod",
        "LengthyHeadNod",
        "CockyHeadTurn",
        "LookingAround",
        "VerySad",
        "Sad",
        "ThoughtfulHeadShake",
        "Pouting",
        "QuestionOneArm",
        "QuestionTwoArms",
        "Talking",
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
    this.addEmotionNotAvailable();
    characterSelect?.events.setValue.addListener(this, (newValue) => {
      if (newValue == "Narrator") {
        this.addEmotionNotAvailable();
      } else {
        this.removeEmotionNotAvailable();
      }
    });
  }

  public load(state: INodeState) {
    super.load(state);
  }
}
