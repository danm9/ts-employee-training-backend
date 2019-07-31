Parse.Cloud.define("card", async request => {
  // Request will be JSON with a name, desc, position, and user field
  // console.log(request.params);

  let { name, desc, position, user } = request.params;

  if (!user.__type === "Pointer") return "User?";
  if (!user.className === "_User") return "User?";
  if (!typeof user.objectId === "string") return "User?";
  if (!typeof user === "object") return "User?";

  if (!typeof name === "string") return;
  if (!typeof desc === "string") return;
  if (!typeof position === "string") return;

  name = name.trim();
  desc = desc.trim();
  position = position.trim();

  if (name && desc && position && user) {
    const Card = Parse.Object.extend("Card");
    const card = new Card();
    card.set("name", name);
    card.set("desc", desc);
    card.set("position", position);
    card.set("user", user);
    card.save();

    return "Added Successfuly";
  }

  return "Invalid request";
});
