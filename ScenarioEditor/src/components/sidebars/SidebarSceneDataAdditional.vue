<template>
  <div style="text-align: left">
    <h2>{{ value.title }}</h2>
    <p>
      The {{ value.title }} section is used to refer to websites or external
      documents (e.g., PDFs).
    </p>
    <div id="external-docs">
      <div class="dark-input-nohover">
        <form v-on:submit.prevent="addNewExternalDoc">
          <label for="external-doc-name">Name:</label>
          <input
            v-model="externalDocName"
            id="external-doc-name"
            placeholder="Google"
            class="dark-input"
            required
          />
          <br />
          <label for="external-doc-url">URL:</label>
          <input
            v-model="externalDocUrl"
            id="external-doc-url"
            placeholder="https://www.google.com"
            class="dark-input"
            type="url"
            required
          />
          <br />
          <button>Add</button>
        </form>
      </div>
      <ul id="external-docs-list">
        <li
          v-for="(doc, index) in value.additionalContent"
          v-bind:key="doc.id"
          v-bind:title="doc.title"
        >
          <span>{{ doc.name }}</span>
          <button v-on:click="removeExternalDoc(index)">Remove</button> <br />
          <a :href="doc.url" target="_blank">{{ doc.url }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { InputOption } from "@baklavajs/plugin-options-vue";

interface ValueData {
  title: string;
  additionalContent: Array<ContentData>;
}

interface ContentData {
  id: number;
  name: string;
  url: string;
}

@Component({
  components: { InputOption },
})
export default class SidebarSceneDataOption extends Vue {
  @Prop()
  value!: ValueData;
  private externalDocName = "";
  private externalDocUrl = "";
  addNewExternalDoc(): void {
    const content = this.value.additionalContent;
    let nextExternalDocId;
    // set id based on the last item, otherwise set id as 1
    if (content.length > 0) {
      nextExternalDocId = content[content.length - 1].id + 1;
    } else {
      nextExternalDocId = 1;
    }
    if (typeof this.value === "object") {
      this.value.additionalContent.push({
        id: nextExternalDocId,
        name: this.externalDocName,
        url: this.externalDocUrl,
      });
    }
    this.externalDocName = "";
    this.externalDocUrl = "";
  }
  removeExternalDoc(index: number): void {
    const content = this.value.additionalContent;
    content.splice(index, 1);
  }
}
</script>
