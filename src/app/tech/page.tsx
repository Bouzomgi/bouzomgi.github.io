import Linker from "@ui/Linker";

const articleTitles = ["Password Security", "Cloud Webserver", "SSL Thoughts"];

const projectTitles = ["nycares Tracker", "Red Black Deployments", "chatter"];

export default function Page() {
  return (
    <Linker
      baseRoute="/tech"
      linkNames={articleTitles}
      altLinkNames={projectTitles}
    />
  );
}
