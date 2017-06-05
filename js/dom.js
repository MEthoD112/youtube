// Class for adding default html
export class Dom {
    constructor() {
        const string =
			`<form class="search-container">
				<div class="input">
					<input type="text" id="search" class="search" placeholder="Search request">
				</div>
				<div class="button">
					<button type="submit" id="submit" disabled>Search</button>
				</div>
			</form>
			<main class="container carousel-container" id="container">
				<ul id="results" class="results carousel trans-animate"></ul>
			</main>
			<div class="paging" id="paging"></div>`;

        document.body.insertAdjacentHTML('beforeend', string);
    }
}
