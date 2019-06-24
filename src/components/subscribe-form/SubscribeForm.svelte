<section class="join-adventure">
  <h2 class="is-uppercase">Join the adventure</h2>
  <p>Members get exclusive access to free giveaways, offers and adventure ideas</p>

  <div class="field has-addons">
    <EmailInput bind:this={emailInput} bind:value={email} styleClass="is-large" {validate} {validity} />
    <ValidatingButton
      text="Join Us"
      bind:this={button}
      on:click={subscribe}
      gaOn="click"
      gaEventCategory="MailingList"
      gaAction="subscribe"
      gaEventLabel="Subscribe Form"
      enabled={$validity.valid}
    />
  </div>

  <span class="opt-out">
    Don’t worry. You can opt out at any time.
  </span>
</section>

<!-- <style lang="scss">
  @import 'src/scss/theme';
  @import 'bulma/sass/utilities/_all.sass';

  .join-adventure {
    height: 100%;
    width: 100%;

    & > p {
      margin: 16px 0 16px 0;
    }

    @include tablet-only {
      width: 50vw;
      margin: 0 auto;

      > span {
        display: block;
      }

      > h2,
      > span {
        text-align: center;
      }
    }
  }

  .opt-out {
    font-size: smaller;
    font-style: italic;
  }

  .field {
    margin-top: 16px;
    flex-direction: column;

    @include from($widescreen) {
      flex-direction: row;
    }
  }

  :global(.join-adventure) .field {
    &.has-addons > .control:last-child {
      margin-left: 0;
      margin-top: 6px;

      @include from ($widescreen) {
        margin-top: 0;
        margin-left: 6px;
      }
    }
  }

  h2 {
    font-size: 16px;
    line-height: 18px;
  }
</style> -->

<script>
  import { createEventDispatcher } from 'svelte'
  import Api from '@beyonk/sapper-httpclient'
  import EmailInput from '../../components/email-input/EmailInput.svelte'
  import ValidatingButton from '../../components/validating-button/ValidatingButton.svelte'
  import get from 'just-safe-get'
	import { emailValidator } from '../../util/validator/validators.js'
  import createValidator from '../../util/validator/validator.js'
  
  const [ validity, validate ] = createValidator(emailValidator())

  const dispatch = createEventDispatcher()

  let emailInput
  let button
  let email = null

  async function subscribe () {
    button.busy()
    await Api
      .create()
      .endpoint('mailing-list/subscribers')
      .payload({
        email,
        subscribe: true
      })
      .default(() => {
        button.reset()
        dispatch('error', { message: "Sorry, we couldn't subscribe you right now. Please try later." })
      })
      .post(() => {
        button.finish()
        // TODO this.root.refs.ac.registerEmail(email.value)
      })
  }
</script>