<script>
	import Nav from '../components/Nav.svelte';

	import Api from '@beyonk/sapper-httpclient';
	import { onMount } from 'svelte'

	export let segment;

	onMount(async () => {
		// console.log(Api)
		await Api
			.create()
			.endpoint('http://mob.beyonk.com:1234')
			.get(() => {
				console.log('got it')
			})
	})
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
