import Page from "../../ui/Page";

const title = "I Flew Home in a Duffle Bag";

const content = `
I flew home in a duffle bag.

The belts
behind the check-in baggage claim
conveyed my chest,
while my identity
stalled at security.

My head hit every stair
as I tumbled through the shoots,
leaving welts
where your bruising had begun.

Hair cinched in the metal clasp
with an ungiving tug, spawning hallucinations
of your articulated turbulence
that quaked.

Smothered by starchy sheets and
compressed by month-old laundry,
I belong.

As I ferry in a ship among the writhing blue,
my soles have never grown so hot.
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
