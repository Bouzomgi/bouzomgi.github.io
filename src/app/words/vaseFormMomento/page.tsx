import Page from "../../ui/Page";

const title = "Vase Form Momento";

const content = `
Perched
on fissured cliffs, this
rugged granite top, is you.
My fingers trace the
immistakable offset parabolas of your spine,
stopping only for a second before
crashing down between the dips.
I savor this moment, for
who knows when your ridges will split
like this mountaintop?
`;

const authorNote = "Inspired by Richard Manz";

export default function Poem() {
  return <Page title={title} content={content} authorNote={authorNote} />;
}
