import Page from "../../ui/Page";

const title = "Eating Alone";

const content = `
The motorcade
of lips aligned in an anecdote
carries the meal,
like a churning wind propelling
the rice aloft.

I cannot bend
my chopsticks across the fold
where conversation cuts like hydraulics. It's
peeling the car door along with it, and
flinging me out to tea.
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
