import Linker from "@ui/Linker";

const articleTitles = ["saponification", "detergent", "laundry and heat"];

export default function Page() {
  return <Linker baseRoute="/etc" linkNames={articleTitles} />;
}
