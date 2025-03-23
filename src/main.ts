document.addEventListener('DOMContentLoaded', () => {
  setupVideoThumbnail();
});

/**
 * Sets up the click event for the video thumbnail to simulate playing a video
 */
function setupVideoThumbnail() {
  const videoContainer = document.querySelector('.video-container');
  const playButton = document.querySelector('.play-button');

  if (videoContainer && playButton) {
    videoContainer.addEventListener('click', () => {
      // In a real implementation, this would play the video
      // For this demo, we'll just toggle a class to indicate it's "playing"
      videoContainer.classList.toggle('playing');

      // Here we would normally replace the thumbnail with an embedded video
      alert('In a real implementation, this would play the Ghidra Getting Started Video');
    });
  }
}
