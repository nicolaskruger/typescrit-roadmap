type World = "world";

type Greeting = `hello ${World}`;

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// type AllLocaleIDs =
//   | "welcome_email_id"
//   | "email_heading_id"
//   | "footer_title_id"
//   | "footer_sendoff_id";

type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// type LocaleMessageIDs =
//   | "en_welcome_email_id"
//   | "en_email_heading_id"
//   | "en_footer_title_id"
//   | "en_footer_sendoff_id"
//   | "ja_welcome_email_id"
//   | "ja_email_heading_id"
//   | "ja_footer_title_id"
//   | "ja_footer_sendoff_id"
//   | "pt_welcome_email_id"
//   | "pt_email_heading_id"
//   | "pt_footer_title_id"
//   | "pt_footer_sendoff_id";

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

/// Create a "watched object" with an 'on' method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person.on("firstNameChanged", () => {});
person.on("firstNameChanged", () => {});

// Intrinsic String Manipulation Types

type Greetingg = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>;

// type ShoutyGreeting = "HELLO, WORLD";

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">;
