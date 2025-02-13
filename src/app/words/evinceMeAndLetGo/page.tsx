import Page from "../../ui/Page";

const title = "Evince Me, and Let Go";

const content = `
  My despair:
  A futile lowland
  marsh
  of mud and muck stained desires,
  where you wallowed as if
  it was yours all along,
  and took sips from my
  tearish agony
  watering hole
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
