function showPage(list, page) {
	let startIndex = page * 9 - 9;
	let endIndex = page * 9;
	let studentList = document.querySelector('.student-list');
	studentList.innerHTML = ' ';
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			// why use literal template instead of dom create element
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

function addPagination(list) {
	let NumOfPage = Math.ceil(list.length / 9);
	let linkList = document.querySelector('.link-list');
	linkList.innerHTML = '';
	for (let i = 1; i <= NumOfPage; i++) {
		// why use literal template instead of dom create element

		let button = `<li><button type="button">${i}</button></li>`;
		linkList.insertAdjacentHTML('beforeend', button);
		let activeButton = document.querySelector('button');
		activeButton.className = 'active';

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
