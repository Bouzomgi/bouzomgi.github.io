import Page from "../../ui/Page";

const title = "A Poem that could Kill";

const content = `
  Sometimes I get this awful hunger
  that swivels up my belly, parades my eyes, and forces me to kneel.

  I must consume words
  I strip their syllables letter by letter and hang them on my wall
  like trophies.

  Poems decompose in my garage.
  and sometimes, when my lips chafe,
  I hack them, stitch them together with one of my own,
  and set the lingual mutant ablaze in my driveway.

  It shrieks
  and scrambles
  until it hits the windshield
  of another poet gunning it
  way past the speed limit.
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
