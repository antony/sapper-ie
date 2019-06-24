<div class="control">
  <button 
    class="button is-medium is-fullwidth by-medium is-primary"
    class:is-loading={state === 'busy'}
    disabled={!enabled}
    ga-on={gaOn}
    ga-event-category={gaEventCategory}
    ga-event-action={gaAction}
    ga-event-label={gaEventLabel}
    on:click>
    {#if state === 'ready'}
    <span class="is-uppercase">
      {text}
    </span>
    {:else if state === 'finished'}
    <span>
      <CheckIcon />
    </span>
    {/if}
  </button>
</div>

<style>
  .button {
    min-width: 100px;
  }
</style>

<script>
  import { CheckIcon } from 'svelte-feather-icons'

  let state = 'ready'

  export let text = 'Button'
  export let gaOn
  export let gaEventCategory
  export let gaAction
  export let gaEventLabel
  export let dependencies = []

  export let enabled = true

  export function reset () {
    state = 'ready'
  }

  export function busy () {
    state = 'busy'
  }

  export function finish () {
    state = 'finished'
  }

</script>