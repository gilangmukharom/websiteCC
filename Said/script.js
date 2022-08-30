// SCROLL
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const positionWindows = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", positionWindows);
    sideBar.classList.remove("menu-active");
})

// MENUBAR ON
const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigation");

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("menu-active");
})

// MENUBAR OFF
const iconClose = document.querySelector(".ri-close-line");

iconClose.addEventListener("click", () => {
    sideBar.classList.remove("menu-active");
})

// SEARCH
const data = [
    "Brand Ambassador Supervisor",
    "EO",
    "People & Culture",
    "Talent Engagement",
    "Open Recruitment Brand Ambassador Candidate College",
    "Webinar",
    "Bincang BPH",
    "Event Internal ",
    "Bonding Whatsapp",
    "Calon Brand Ambassador Candidate College",
    "Pelajar, fresh graduate",
    "Seluruh BPH Candidate College Batch 4",
    "Seluruh anggota volunteer Candidate College Batch 4 ",
    "Seluruh Internal CC"
];

const search = document.getElementsByName('keyword')[0];
const data_section = document.getElementsByClassName('data')[0];

// Enter = Search
search.addEventListener('keyup', event => {
	if (event.keyCode === 13) {
		searchData();
	}
});

// Pencarian data
function searchData() {
	const search_value = search.value.toLowerCase();
	const data_filtered = data.slice(0);

	data_section.innerHTML = "";
	for (var i = 0; i < data_filtered.length; i++) {
		if ( data_filtered[i].toLowerCase().includes(search_value) ) {			

			data_section.innerHTML += "<a href='#'>"+data_filtered[i]+"</a>";
		}
	}	
}