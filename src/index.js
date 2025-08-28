/** @type {NodeListOf<HTMLInputElement>} */
const checkboxes = document.querySelectorAll(".pick");
/** @type {string[]} */
let selectedOrder = [];
/** @type {boolean} */
let isProgrammatic = false;

/**
 * Handle checkbox change.
 * @param {Event & { target: HTMLInputElement }} e
 * @returns {void}
 */
const onChange = (e) => {
	if (isProgrammatic) return;
	const id = e.target.id;

	if (e.target.checked) {
		if (!selectedOrder.includes(id)) {
			selectedOrder.push(id);
		}
	} else {
		selectedOrder = selectedOrder.filter((x) => x !== id);
	}

	const checked = Array.from(checkboxes).filter((cb) => cb.checked);
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
for (const cb of checkboxes) {
	cb.addEventListener("change", onChange);
}
