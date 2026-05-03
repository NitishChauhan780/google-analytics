function trackClick() {
  document.getElementById("output").innerText = "Button Clicked!";

  // Send event to Google Analytics
  gtag('event', 'button_click', {
    event_category: 'engagement',
    event_label: 'Test Button'
  });
}