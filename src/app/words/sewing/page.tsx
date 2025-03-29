import Page from "../../ui/Page";

const title = "Sewing";

const content = `
a whirlwind of floury bits
blurred
made her heave

as she tipped and tripped
between divots and dents,

lingering behind the same distant haze
of brackish jets she founded
so many months ago.

the sidewalk's an unkempt place
to tow a bloated ego.
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
