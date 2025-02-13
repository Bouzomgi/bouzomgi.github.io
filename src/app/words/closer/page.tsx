import Page from "../../ui/Page";

const title = "Closer";

const content = `
  Falsetto soars across the room
  staccato taps our feet in tune
  You trace your bravado onto mine
  keeping me close in 3/4 time

  My fingers carve into your hips
  lunging fast with tender grip
  I pour your back like kudzu vines
  keeping you close in 3/4 time

  We clip our wings and say good night
  and lay our heads on pale moonlight
  and as we rest, our heartbeats intertwine,
  keeping us close in 3/4 time
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
