export function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // set the button to shown or hidden, depending on what the user answers
    notificationBtn.style.display =
      Notification.permission === 'granted' ? 'none' : 'block';
  }

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else if (checkNotificationPromise()) {
    Notification.requestPermission().then((permission) => {
      handlePermission(permission);
    });
  } else {
    Notification.requestPermission((permission) => {
      handlePermission(permission);
    });
  }
}
