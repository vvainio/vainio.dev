import './index.scss'

const qs = document.querySelector.bind(document)
const currentYear = new Date().getFullYear()

function updateCopyrightYear() {
  const copyrightYear = qs('[data-id="copyright-year"]')
  copyrightYear.innerHTML = currentYear
}

function updateExperienceYears() {
  const experienceYears = qs('[data-id="experience-years"]')
  const startingYear = 2014
  experienceYears.innerHTML = currentYear - startingYear
}

updateCopyrightYear()
updateExperienceYears()
