import Page from "../../ui/Page";

const title = "Spearfishing";

const content = `
  Your knuckles
  scaled my curves,
  leaving my bony interior
  to pickle in the brine.

  Your language
  pilfered
  the scintillation of my shoaling,
  in attempt to restore
  some glint unto you.

  The injection well
  you dug in the soft spot of my skull
  purged the regrets
  of my unsullied lips
  now punctured by the hook you casted.

  I’ll decompose on the waves
  as you sink once more into the unknown.
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
