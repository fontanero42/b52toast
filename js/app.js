const storageType = localStorage;
const consentPropertyName = 'fontanero_consent';
const coolDown = 10 * 1000;

const shouldShowPopup = () => {
	const compare = new Date().getTime() - coolDown;
	if (storageType.getItem(consentPropertyName) < compare)
		return true;
	else 
		return false;
	
}
	
const saveToStorage = () => storageType.setItem(consentPropertyName, new Date().getTime());

window.onload = () => {
    const acceptFn = event => {
        saveToStorage(storageType);
        modal.hide();
        console.log("accept");
    }

    const consentPopup = document.getElementById('consent-Dialog');
    const modal = new bootstrap.Modal(consentPopup);
    
    
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);


    if (shouldShowPopup()) 
	    modal.show();
};