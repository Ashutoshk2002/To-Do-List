//jshint esversion:6

module.exports =function() {
  var today = new Date();
  var option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", option);
}
