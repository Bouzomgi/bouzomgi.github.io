import Linker from "../ui/Linker";

const poemTitles = [
  "The Tiger Lily",
  "Spearfishing",
  "A Poem that Could Kill",
  "Mechanics of New York City",
  "rancidpoem",
  "Closer",
  "Eating Alone",
  "I Flew Home in a Duffle Bag",
  "sap",
  "pale ridges",
  "Vase Form Momento",
  "//timeline",
  "Erased",
  "Trapdoor Hands",
  "Evince Me, and Let Go",
  "I Call to the Birds and the Black Things",
  "Sewing",
  "Limits",
];

export default function Page() {
  return <Linker baseRoute="/words" linkNames={poemTitles} />;
}
