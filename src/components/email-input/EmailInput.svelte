<div class="control has-icons-right has-icons-left is-expanded {styleClass}">
  <input class="input {styleClass}"
    type="email"
    bind:value={value}
    placeholder="Email"
    aria-label="Email Address"
    use:validate
    >
  <span class="icon is-medium is-left">
    <MailIcon />
  </span>
  <span class="icon is-medium is-right">
    {#if $validity.dirty}
      {#if $validity.valid}
        <CheckIcon />
      {:else}
        <XIcon />
      {/if}
    {/if}
  </span>
</div>

<script>
  import { MailIcon, CheckIcon, XIcon } from 'svelte-feather-icons'

  export let value = null
  export let styleClass = 'is-medium'
  export let validate
  export let validity
</script>