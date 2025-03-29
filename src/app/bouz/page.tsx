import "@styles/narrowPage.css";
import Page from "../ui/Page";

const imageUrl = "/profile.png";

const content = `
My name is Brian Ouzomgi. I'm a software engineer residing in New York City.

I like language.
I like to feel words clink in my mouth.
I like nonsense verse, rhyme, powerful and painful poetry.

I like service work.
It allows me the opportunity to go places I'd never normally go,
talk to people I'd never normally talk to,
& do things I'd never normally do.

I like techy stuff.
I like designing and building systems.
I'd say I know Scala, Typescript, and Python ecosystems halfway decent
but I mostly enjoy crafting complete solutions
which tend to involve cloud computing, containerization, web work, databases, etc.
`;

export default function UserPage() {
  return (
    <div>
      <Page content={content} image={imageUrl} />
    </div>
  );
}
