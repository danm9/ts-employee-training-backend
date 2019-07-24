/**
 * Place Parse Cloud Code Here
 */

require("./save");
require("./api/form");
require("./test");
require("./functions");
// require("./email");

Parse.Cloud.define("test_push_services", function(req, res) {
  Parse.Push.send({
    data: {
      alert: "This is a test from Parse Server"
    }
  });
});
