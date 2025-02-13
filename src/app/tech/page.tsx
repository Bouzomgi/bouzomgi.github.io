import Linker from "../ui/Linker";

const articleTitles = ["Password Security"];

export default function Page() {
  return <Linker baseRoute="/tech" linkNames={articleTitles} />;
}
