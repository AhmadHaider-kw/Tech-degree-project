// showing all items in the page
function showPage(list, page) {
	let startIndex = page * 9 - 9;
	let endIndex = page * 9;
	let studentList = document.querySelector('.student-list');
	studentList.innerHTML = ' ';
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			let studentItem = `<li class="student-item cf"> 
			<div class="student-details">
			  <img class="avatar" src=" ${list[i].picture.medium}" alt="Profile Picture">
			  <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
			  <span class="email">${list[i].email}</span>
			</div>
			<div class="joined-details">
			  <span class="date">${list[i].registered.date}</span>
			</div>
			</li>`;
			studentList.insertAdjacentHTML('beforeend', studentItem);
		}
	}
}
// adding pageniation to the page
function addPagination(list) {
	// getting a number of the page from data array
	let NumOfPage = Math.ceil(list.length / 9);
	let linkList = document.querySelector('.link-list');
	linkList.innerHTML = '';
	// i = 1 , because page start at 1
	for (let i = 1; i <= NumOfPage; i++) {
		// to make element
		let button = `<li><button type="button">${i}</button></li>`;
		linkList.insertAdjacentHTML('beforeend', button);
		let activeButton = document.querySelector('button');
		activeButton.className = 'active';

		// to make some action
		linkList.addEventListener('click', (e) => {
			if (e.target.tagName === 'BUTTON') {
				let deactiveButton = document.querySelector('.active');
				deactiveButton.className = '';
				e.target.className = 'active';
				showPage(list, e.target.textContent);
			}
		});
	}
}
showPage(data, 1);
addPagination(data);
