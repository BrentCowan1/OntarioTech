<template>
  <div style="text-align: left">
    <h1>Settings</h1>
    <p>Define the scene settings below.</p>
    <p class="settings-item">
      <checkbox-option
        v-model="showIfDecisionWasCorrect"
        name="Show to participant when a decision choice was correct or incorrect."
      ></checkbox-option>
    </p>
    <p class="settings-item">
      <checkbox-option
        v-model="allowIncorrectDecision"
        name="Allow participant to choose an incorrect decision and continue the scenario."
      ></checkbox-option>
      <span>
        If this is disabled it will force the participant to answer the same
        question until a correct decision is chosen.
      </span>
    </p>
    <p class="settings-item">
      <checkbox-option
        v-model="useTTS"
        name="Use text-to-speech (TTS) to generate dialogue voices."
      ></checkbox-option>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CheckboxOption } from "@baklavajs/plugin-options-vue";
import store from "@/store";

@Component({
  components: { CheckboxOption },
})
export default class SidebarSceneSettings extends Vue {
  @Prop()
  value!: unknown;

  get showIfDecisionWasCorrect() {
    return store.state.showIfDecisionWasCorrect;
  }

  set showIfDecisionWasCorrect(bool) {
    store.commit("updateShowIfDecisionWasCorrect", bool);
  }

  get allowIncorrectDecision() {
    return store.state.allowIncorrectDecision;
  }

  set allowIncorrectDecision(bool) {
    store.commit("updateAllowIncorrectDecision", bool);
  }

  get useTTS() {
    return store.state.useTTS;
  }

  set useTTS(bool) {
    store.commit("updateUseTTS", bool);
  }
}
</script>
