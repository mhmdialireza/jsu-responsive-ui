const hamburger = document.querySelector('#hamburger')
const exitArrows = document.querySelector('#exit-arrows')
const blurElement = document.querySelector('#blur-element')
const responsiveNav = document.querySelector('#responsive-nav')

hamburger.addEventListener('click', () => {
    responsiveNav.classList.remove('-right-3/4')
    responsiveNav.classList.remove('left-[100%]')
    responsiveNav.classList.add('right-0')
    responsiveNav.classList.add('left-1/4')

    blurElement.classList.remove('hidden')
})

exitArrows.addEventListener('click', () => {
    responsiveNav.classList.add('-right-3/4')
    responsiveNav.classList.remove('right-0')

    blurElement.classList.add('hidden')
})

blurElement.addEventListener('click', () => {
    responsiveNav.classList.add('-right-3/4')
    responsiveNav.classList.remove('right-0')

    blurElement.classList.add('hidden')
})

const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(dropdown =>
    dropdown.addEventListener('click', () => {
        dropdown.childNodes[3].classList.toggle('opacity-0')
        dropdown.childNodes[3].classList.toggle('overflow-hidden')
        dropdown.childNodes[3].classList.toggle('h-0')
    }))

const responsiveDropdown = document.querySelectorAll('.responsive-dropdown')
responsiveDropdown.forEach(responsiveDropdown =>
    responsiveDropdown.addEventListener('click', () => {
        responsiveDropdown.nextElementSibling.classList.toggle('opacity-0')
        responsiveDropdown.nextElementSibling.classList.toggle('overflow-hidden')
        responsiveDropdown.nextElementSibling.classList.toggle('h-0')
    }))

const homeChvronChanges = document.querySelectorAll('.home-chvron-change')
const homeItems = document.querySelectorAll('.home-items')

homeChvronChanges.forEach(homeChvronChange =>
    homeChvronChange.addEventListener('click', () => {
        homeChvronChange.childNodes[1].classList.toggle('hidden')
        homeChvronChange.childNodes[3].classList.toggle('hidden')
        console.log(homeChvronChange.parentNode.childNodes);
        homeChvronChange.parentNode.childNodes[13].classList.toggle('hidden')
        homeChvronChange.parentNode.childNodes[15].classList.toggle('hidden')
        // homeChvronChange.parentNode.childNodes[5].classList.toggle('-my-32')
    }))


const dropdownDays = document.querySelectorAll('.dropdown-day')
dropdownDays.forEach(dropdownDay => {
    dropdownDay.addEventListener('click', () => {
        dropdownDay.childNodes[1].childNodes[1].childNodes[1].classList.toggle('hidden')
        dropdownDay.childNodes[1].childNodes[1].childNodes[3].classList.toggle('hidden')

        dropdownDay.nextElementSibling.classList.toggle('h-0')
        dropdownDay.nextElementSibling.classList.toggle('overflow-hedden')
    })
})

const addTab = document.querySelector('#add')
const showTab = document.querySelector('#show')
const tabDivider = document.querySelector('#divider')
const addSection = document.querySelector('#add-section')
const showSection = document.querySelector('#show-section')

const addTabText = 'بخش افزودن'
const showTabText = 'بخش نمایش'

addTab.addEventListener('click', () => {
    addTab.classList.add('bg-secondary')
    addTab.classList.remove('bg-slate-300')

    showTab.classList.add('bg-slate-300')
    showTab.classList.remove('bg-secondary')

    addSection.classList.toggle('hidden')
    showSection.classList.toggle('hidden')

    tabDivider.innerHTML = addTabText
})

showTab.addEventListener('click', () => {
    showTab.classList.add('bg-secondary')
    showTab.classList.remove('bg-slate-300')

    addTab.classList.add('bg-slate-300')
    addTab.classList.remove('bg-secondary')

    addSection.classList.toggle('hidden')
    showSection.classList.toggle('hidden')

    tabDivider.innerHTML = showTabText
})

const searchTypeOptions = document.querySelectorAll('.serach-type-option')
const searchTypeDropdownToggle = document.querySelector('#serach-type')
console.log(searchTypDropdownToggle);
searchTypeDropdownToggle.addEventListener('change', () => {
    // const value = searchTypeDropdownToggle.options[searchTypeDropdownToggle.selectedIndex].value
    searchTypeOptions.forEach(searchTypeOptions => {
        searchTypeOptions.classList.toggle('hidden')
    })
})
