/// <reference types="svelte" />

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    'on:outsideclick'?: (event: CustomEvent<any>) => void;
  }
}
