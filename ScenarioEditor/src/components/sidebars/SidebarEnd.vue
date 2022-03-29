<template>
  <div style="text-align: left">
    <h1>End scenario reason</h1>
    <p>Define the reason for ending the scenario.</p>
    <textarea
      v-model="value.content"
      placeholder="add multiple lines"
      class="dark-input"
      rows="5"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputOption } from "@baklavajs/plugin-options-vue";

@Component({
  components: { InputOption },
})
export default class SidebarEndOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
