const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element, then play
async function selectMediaStream(){ 
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();   
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Catch Error Here.
    }
}

button.addEventListener('click', async () =>{
    // Disable the button when we click on it
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

// On Load
selectMediaStream();