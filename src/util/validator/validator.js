import { writable } from 'svelte/store'

export default function (...validators) {
	const { subscribe, set } = writable({ dirty: false, valid: false, message: null })
	
	function action (node) {
		function validate () {
			const failing = validators.find(v => v(node.value) !== true)
			
			set({
				dirty: true,
				valid: !failing,
				message: failing && failing(node.value)
			})
		}

		node.addEventListener('keyup', validate)

		return {
			destroy: () => node.removeEventListener('keyup', validate)
		}
	}
	
	return [ {subscribe}, action ]
}
