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
  altLinkNames?: string[];
};

export default function Linker({
  baseRoute,
  linkNames,
  altLinkNames,
}: LinkerProps) {
  return (
    <div className="page">
      <div className="links">
        {linkNames.map((title) => link(baseRoute, title))}
      </div>
      {altLinkNames && (
        <div className="links">
          {altLinkNames.map((title) => link(baseRoute, title))}
        </div>
      )}
    </div>
  );
}
