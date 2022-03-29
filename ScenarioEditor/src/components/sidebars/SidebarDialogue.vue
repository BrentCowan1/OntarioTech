<template>
  <div style="text-align: left">
    <h2>Dialogue content</h2>
    <p>Edit the dialogue text</p>
    <tiptap v-model="value.content" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputOption } from "@baklavajs/plugin-options-vue";
import Tiptap from "../Tiptap.vue";

@Component({
  components: { InputOption, Tiptap },
})
export default class SidebarDialogueOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
