const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const emails = [
  "test@example.com",
  "invalid-email",
  "user.name@domain.co",
  "another+email@sub.domain.org"
];

emails.forEach((email) => {
  if (email.match(emailPattern)) {
    console.log(`${email} is a valid email.`);
  } else {
    console.log(`${email} is not a valid email.`);
  }
});


const digitPattern = /\d+/g;

const text = "The year is 2024, and the time is 12:45 PM.";

const matches = text.match(digitPattern);

if (matches) {
  matches.forEach((match) => {
    console.log(`Found match: ${match}`);
  });
} else {
  console.log("No digits found.");
}

