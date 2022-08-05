/*---Variables to connect HTML components with JAVASCRIPT---*/
const menuMobile = document.querySelector(".navbar-right__mobile-menu");
const openSecondaryList = document.querySelector(".open-secondary-list-features");
const openSecondaryListCompany = document.querySelector(".open-secondary-list-company");
const secondaryListContainerFeatures = document.querySelector(".mobile-menu-secondary-list-features");
const secondaryListContainerCompany = document.querySelector(".mobile-menu-secondary-list-company");

const desktopMenuFeatures = document.querySelector(".desktop-menu-features");
const desktopMenuSecondaryFeatures = document.querySelector(".desktop-menu-secondary-list-features");
const desktopMenuCompany = document.querySelector(".desktop-menu-company");
const desktopMenuSecondaryCompany = document.querySelector(".desktop-menu-secondary-list-company");


/*---Variables to connect the icons---*/
const mobileMenuOpen = document.querySelector(".mobile-menu-icon");
const mobileMenuClose = document.querySelector(".mobile-menu__close-icon");
const mobilelistIconDownFeatures = document.querySelector(".principal-list-icon-down-features");
const mobileListIconUpFeatures = document.querySelector(".principal-list-icon-up-features");
const mobilelistIconDownCompany = document.querySelector(".principal-list-icon-down-company");
const mobileListIconUpCompany = document.querySelector(".principal-list-icon-up-company");

const desktopMenuIconDownFeatures = document.querySelector(".desktop-menu-icon-down-features");
const desktopMenuIconUpFeatures = document.querySelector(".desktop-menu-icon-up-features");
const desktopMenuIconDownCompany = document.querySelector(".desktop-menu-icon-down-company");
const desktopMenuIconUpCompany = document.querySelector(".desktop-menu-icon-up-company");

/*---Click events---*/
openSecondaryList.addEventListener("click", secondaryListOpenFeatures);
openSecondaryListCompany.addEventListener("click", secondaryListOpenCompany);

desktopMenuFeatures.addEventListener("click", desktopMenuFeatureOpen);
desktopMenuCompany.addEventListener("click", desktopMenuCompanyOpen);

/*--Click events to icons */
mobileMenuOpen.addEventListener("click", openMenuMobile);
mobileMenuClose.addEventListener("click", closeMenuMobile);

/*close containers in case the size is suddenly reduced*/
addEventListener("resize", () => {
    if (innerWidth > 820) {
        menuMobile.classList.add("inactive");
    } else if(innerWidth < 820) {
        desktopMenuIconUpFeatures.style.display = "none";
        desktopMenuIconDownFeatures.style.display = "inline";
        desktopMenuIconUpCompany.style.display = "none";
        desktopMenuIconDownCompany.style.display = "inline";
        desktopMenuSecondaryFeatures.classList.add("inactive");
        desktopMenuSecondaryCompany.classList.add("inactive");
    }
});

/*---Functions---*/

/*Function to open the mobile menu */
function openMenuMobile() {
    /*condition to control the icons when the mobile menu is closed and opened */
    if (menuMobile.classList.contains("inactive")) {
        secondaryListContainerFeatures.classList.add("inactive");
        secondaryListContainerCompany.classList.add("inactive");
        mobileListIconUpFeatures.style.display = "none";
        mobilelistIconDownFeatures.style.display = "block";

        mobileListIconUpCompany.style.display = "none";
        mobilelistIconDownCompany.style.display = "block";
    }
    /*Remove the "inactive" class and the mobile menu is show */
    menuMobile.classList.remove("inactive");
    menuMobile.classList.add("shadows");
}
/*Function to close the mobile menu */
function closeMenuMobile() {
    /*Add "inactive" class to close the mobile menu */
    menuMobile.classList.add("inactive");
}

/*Function to add and remove the inactive class to open the secondary menu of features */
function secondaryListOpenFeatures() {
    const secondaryFeaturesContainerOpen = secondaryListContainerFeatures.classList.contains("inactive");

    /*Condition to change the icon for each click */
    if (secondaryFeaturesContainerOpen) {
        mobileListIconUpFeatures.style.display = "block";
        mobilelistIconDownFeatures.style.display = "none"
    } else {
        mobilelistIconDownFeatures.style.display = "block";
        mobileListIconUpFeatures.style.display = "none"
    }

    secondaryListContainerFeatures.classList.toggle("inactive");
}
/*Function to add and remove the inactive class to open the secondary menu of company*/
function secondaryListOpenCompany() {
    const secondaryCompanyContainerOpen = secondaryListContainerCompany.classList.contains("inactive");

    /*Condition to change the icon for each click */
    if (secondaryCompanyContainerOpen) {
        mobileListIconUpCompany.style.display = "block";
        mobilelistIconDownCompany.style.display = "none";
    } else {
        mobileListIconUpCompany.style.display = "none";
        mobilelistIconDownCompany.style.display = "block";
    }
    secondaryListContainerCompany.classList.toggle("inactive");
}

function desktopMenuFeatureOpen() {
    /*Condition to check if the container is inactive or active and change the icon */
    if (desktopMenuSecondaryFeatures.classList.contains("inactive")) {
        desktopMenuIconUpFeatures.style.display = "inline";
        desktopMenuIconDownFeatures.style.display = "none";
    }else {
        desktopMenuIconUpFeatures.style.display = "none";
        desktopMenuIconDownFeatures.style.display = "inline";
    }

    desktopMenuSecondaryFeatures.classList.toggle("inactive")
}
function desktopMenuCompanyOpen() {
    /*Condition to check if the container is inactive or active and change the icon */
    if (desktopMenuSecondaryCompany.classList.contains("inactive")) {
        desktopMenuIconUpCompany.style.display = "inline";
        desktopMenuIconDownCompany.style.display = "none";
    }else {
        desktopMenuIconUpCompany.style.display = "none";
        desktopMenuIconDownCompany.style.display = "inline";
    }
    desktopMenuSecondaryCompany.classList.toggle("inactive");
}