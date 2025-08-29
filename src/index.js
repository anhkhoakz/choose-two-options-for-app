/** @type {NodeListOf<HTMLInputElement>} */
const checkboxes = document.querySelectorAll(".pick");
/** @type {string[]} */
let selectedOrder = [];
/** @type {boolean} */
let isProgrammatic = false;

/**
 * Handle checkbox change.
 * @param {Event & { target: HTMLInputElement }} event
 * @returns {void}
 */
const onChange = (event) => {
	if (isProgrammatic) return;
	const id = event.target.id;

	if (event.target.checked) {
		if (!selectedOrder.includes(id)) {
			selectedOrder.push(id);
		}
	} else {
		selectedOrder = selectedOrder.filter((x) => x !== id);
	}

	const checked = Array.from(checkboxes).filter((cb) => cb.checked);
	if (checked.length <= 2) {
		return;
	}
	if (checked.length > 2) {
		const toRemoveId = selectedOrder.find((x) => x !== id);
		/** @type {HTMLInputElement | null} */
		const toRemove = toRemoveId
			? /** @type {HTMLInputElement | null} */ (
					document.getElementById(toRemoveId)
				)
			: null;
		if (toRemove instanceof HTMLInputElement) {
			isProgrammatic = true;
			toRemove.checked = false;
			isProgrammatic = false;
			selectedOrder = selectedOrder.filter((x) => x !== toRemoveId);
		}
	}
};
for (const checkbox of checkboxes) {
	checkbox.addEventListener("change", onChange);
}
