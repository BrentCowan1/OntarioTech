<template>
  <div style="text-align: left">
    <h1>Choices content</h1>
    <p>Edit the choices text</p>
    <h3>Choice 1:</h3>
    <textarea
      v-model="value.choice1"
      placeholder="Enter choice text"
      class="dark-input"
      rows="3"
    ></textarea>
    <h3>Choice 2:</h3>
    <textarea
      v-model="value.choice2"
      placeholder="Enter choice text"
      class="dark-input"
      rows="3"
    ></textarea>
    <h3>Choice 3:</h3>
    <textarea
      v-model="value.choice3"
      placeholder="Enter choice text"
      class="dark-input"
      rows="3"
    ></textarea>
    <h3>Choice 4:</h3>
    <textarea
      v-model="value.choice4"
      placeholder="Enter choice text"
      class="dark-input"
      rows="3"
    ></textarea>
    <h3>Choice 5:</h3>
    <textarea
      v-model="value.choice5"
      placeholder="Enter choice text"
      class="dark-input"
      rows="3"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputOption } from "@baklavajs/plugin-options-vue";

@Component({
  components: { InputOption },
})
export default class SidebarChoicesOption extends Vue {
  @Prop()
  value!: unknown;
}
</script>
