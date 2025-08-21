import Linker from "@ui/Linker";

const opportunityTitles = [
  "St John the Divine",
  "Rauschenbusch Metro Ministries",
  "Mobile Soup Kitchen",
];

export default function Page() {
  return <Linker baseRoute="/service" linkNames={opportunityTitles} />;
}
