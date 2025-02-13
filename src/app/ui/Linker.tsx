import { camelCase } from "lodash";

import "@/styles/linker.css";

function link(baseRoute: string, title: string) {
  const alphaString = title.replace(/[^a-zA-Z\s]/g, "");

  return (
    <a key={alphaString} href={`${baseRoute}/` + camelCase(alphaString)}>
      {title}
    </a>
  );
}

type LinkerProps = {
  baseRoute: string;
  linkNames: string[];
};

export default function Linker({ linkNames, baseRoute }: LinkerProps) {
  return (
    <div className="page links">
      {linkNames.map((title) => link(baseRoute, title))}
    </div>
  );
}
