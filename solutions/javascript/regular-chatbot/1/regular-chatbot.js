export function isValidCommand(command) {
  let reg = new RegExp("^chatbot", "i");
  return reg.test(command);
}

export function removeEmoji(message) {
  const reg = new RegExp("emoji\\d+", "gmi");
  return message.replaceAll(reg, "")
}

export function checkPhoneNumber(number) {
  const reg = new RegExp("\\(\\+\\d+\\)\\s+\\d{3}-\\d{3}-\\d{3}");
  return reg.test(number) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`;
}

export function getURL(userInput) {
  const reg = new RegExp("\\b(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}\\b", "g")
  return userInput.match(reg);
}

export function niceToMeetYou(fullName) {
  // const reg = new RegExp("(.+),\\s(.+)", "g")
  const reg = /(.+),\s(.+)/;
  let name = fullName.match(reg);
  return `Nice to meet you, ${name[2]} ${name[1]}`;
}

