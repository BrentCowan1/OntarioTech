<template>
  <div>
    <div
      @click="$emit('input', !value)"
      :class="{
        'dark-checkbox': true,
        '--checked': value,
      }"
    >
      <div class="__checkmark-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            class="__checkmark"
            d="M 6 5 L 6 10 L 16 10"
            transform="rotate(-45 10 10)"
          ></path>
        </svg>
      </div>
      <div v-if="name === 'EnableClient'" class="ml-2">
        {{ $store.state.characterNames.client }}
      </div>
      <div v-else-if="name === 'EnableCharacterA'" class="ml-2">
        {{ $store.state.characterNames.characterA }}
      </div>
      <div v-else-if="name === 'EnableCharacterB'" class="ml-2">
        {{ $store.state.characterNames.characterB }}
      </div>
      <div v-else-if="name === 'EnableCharacterC'" class="ml-2">
        {{ $store.state.characterNames.characterC }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CharactersOption extends Vue {
  @Prop({ type: Boolean })
  value!: boolean;

  @Prop({ type: String })
  name!: string;
}
</script>
