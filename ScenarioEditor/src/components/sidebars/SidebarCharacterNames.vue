<template>
  <div style="text-align: left">
    <h1>Character names</h1>
    <p>Set the character names below.</p>
    <h3 style="margin-bottom: 0.3em">Client:</h3>
    <input-option v-model="nameClient"></input-option>
    <h3 style="margin-bottom: 0.3em">Character A:</h3>
    <input-option v-model="nameCharacterA"></input-option>
    <h3 style="margin-bottom: 0.3em">Character B:</h3>
    <input-option v-model="nameCharacterB"></input-option>
    <h3 style="margin-bottom: 0.3em">Character C:</h3>
    <input-option v-model="nameCharacterC"></input-option>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputOption } from "@baklavajs/plugin-options-vue";
import store from "@/store";

@Component({
  components: { InputOption },
})
export default class SidebarCharacterNames extends Vue {
  @Prop()
  value!: unknown;

  get nameClient() {
    return store.state.characterNames.client;
  }

  set nameClient(name: string) {
    this.updateCharacterName("Client", name);
  }

  get nameCharacterA() {
    return store.state.characterNames.characterA;
  }

  set nameCharacterA(name: string) {
    this.updateCharacterName("Character A", name);
  }

  get nameCharacterB() {
    return store.state.characterNames.characterB;
  }

  set nameCharacterB(name: string) {
    this.updateCharacterName("Character B", name);
  }

  get nameCharacterC() {
    return store.state.characterNames.characterC;
  }

  set nameCharacterC(name: string) {
    this.updateCharacterName("Character C", name);
  }

  updateCharacterName(character: string, value: string) {
    switch (character) {
      case "Client":
        store.commit("updateNameClient", value);
        break;
      case "Character A":
        store.commit("updateNameCharacterA", value);
        break;
      case "Character B":
        store.commit("updateNameCharacterB", value);
        break;
      case "Character C":
        store.commit("updateNameCharacterC", value);
        break;
    }
  }
}
</script>
