import Page from "../../ui/Page";
import "@styles/page.css";

const title = "Limits";

const content = `
  Lackadaisical
  drifting
  beyond senses, beyond the outer
  limit
  I don't respond so well
  to limits
  Bubble me in, encase me
  in a suit of solid gold
  and I shall asphyxiate
  and choke
  on my own words
  I don't respond
  to limits
`;

export default function Poem() {
  return (
    <div className="limits">
      <Page title={title} content={content} />
    </div>
  );
}
