const widget = uploadcare.Widget('[role="uploadcare-uploader"]');
const fontGrid = document.getElementById('font-grid');
const loadingMsg = document.getElementById('loading-msg');

// Function to add a font to the page
function displayFont(fileInfo) {
    if(loadingMsg) loadingMsg.remove();

    const card = document.createElement('div');
    card.className = 'font-card';
    card.innerHTML = `
        <h4>${fileInfo.name}</h4>
        <p>Size: ${(fileInfo.size / 1024).toFixed(2)} KB</p>
        <a href="${fileInfo.cdnUrl}" class="btn-download" download>Download OTF</a>
    `;
    fontGrid.prepend(card);
}

// Listen for when a user finishes an upload
widget.onUploadComplete((fileInfo) => {
    console.log("File uploaded to CDN:", fileInfo.cdnUrl);
    displayFont(fileInfo);
});
