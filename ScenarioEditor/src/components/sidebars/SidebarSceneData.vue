<template>
  <div style="text-align: left">
    <h2>{{ value.title }}</h2>
    <p>Edit the {{ value.title }} content using the field below.</p>
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
export default class SidebarSceneDataOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
