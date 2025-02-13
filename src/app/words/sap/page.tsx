import Page from "../../ui/Page";

const title = "sap";

const content = `
  she spends her time
  in thin grooved dimes,
  swerving along an irreversible path.

  crank,
  crank,
  she empties herself
  into the teeth of cogs,
  shoving one upon another
  in that crowd of metallic, serriform aftertaste.

  i'll summersault over.
  i can't help myself. please,
  chew on my mind
  mold me with your tongue
  and fill me with you.

  and if i don't make your perfect foil,
  you're more than welcome to brush off the polyol
  and spit me out on the asphalt outside.
`;

const authorNote = "polyol is the dusty stuff they coat gum in.";

export default function Poem() {
  return <Page title={title} content={content} authorNote={authorNote} />;
}
