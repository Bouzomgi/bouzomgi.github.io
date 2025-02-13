import Page from "../../ui/Page";

const title = "pale ridges";

const content = `
  "The wind is barbarian, grope-legged and sword-flagging.
  Prod on 'fore it tangles the hind of your steed, asker, and
  your pusillanimity invites the spawn of century old dunes."

  ...

  this is all i've known.
  borne in flecks of fool's gold, i wistfully scoop
  my fathers and kin
  and stretch my fingers,
  letting the sand flee in freefall. it skims across my thin eggshell
  thawb and settles to the ground as if nothing's ever changed.
  i know myself as sayyed, but beyond the sun-beat sky,
  i am Rub' al Khali, Saudi, speck on sea.

  Hoof marks stamp this war in the sandbanks, but behind the immediacy, our fate is primer: 
      some dense amalgamation of these imprints with our final remains.

  the base-coat for a new world remodeling.
`;

export default function Poem() {
  return <Page title={title} content={content} />;
}
