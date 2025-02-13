import Page from "../ui/Page";

const content = `
  My name is Brian Ouzomgi. I am a software engineer residing in New York City.

  I like language. I like to feel words clink in my mouth. 
  I like nonsense verse, rhyme, powerful and painful poetry. 
  I don't cling to a particular style -- I just write for the sound.

  Service makes my heart flutter. Not because I am a natural giver (instead I think I might
  catagorize myself as the opposite, and it is something I try to work on), but rather 
  volunteering gives me the opportunity to share an uncountable number of shared short lived
  moments of pure bliss with strangers. It is a blessing to assist and receive a "thank you".
  Both being grateful and receiving the gratefulness of strangers is chicken nugget burrito.
`;

export default function Poem() {
  return <Page content={content} />;
}
