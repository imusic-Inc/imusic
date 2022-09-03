function generateRandomString (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


export function formatTime(val) {
  var h = 0, m = 0, s;
  val = parseInt(val, 10);
  if (val > 60 * 60) {
   h = parseInt(val / (60 * 60), 10);
   val -= h * 60 * 60;
  }
  if (val > 60) {
   m = parseInt(val / 60, 10);
   val -= m * 60;
  }
  s = val;
  val = (h > 0)? h + ':' : '';
  val += (m > 0)? ((m < 10 && h > 0)? '0' : '') + m + ':' : '0:';
  val += ((s < 10)? '0' : '') + s;
  return val;
}

export function timeSince (date) {

    var seconds = Math.abs(Math.floor((new Date() - date) / 1000));
    
    var interval = seconds / 31536000;
    
    if (interval > 1) {
      return Math.floor(interval) + " year(s) ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " month(s) ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " day(s) ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hour(s) ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minute(s) ago";
    }
    return Math.floor(seconds) + " second(s) ago";

}
    
 


export default generateRandomString;