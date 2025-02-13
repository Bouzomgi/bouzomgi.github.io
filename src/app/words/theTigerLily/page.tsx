import Page from "../../ui/Page";

const title = "The Tiger Lily";

const content = `
  The tiger lily’s
  budding anthers,
  fuzzing in puberty,
  eagerly attempt to claim
  their spots on the wind.

  A father knows how
  soil sits when it is unwelcoming.
  A father knows when
  sun rays tell strange lies.

  The tiger lily
  grips his children by their necks
  under his petals, which catch
  the morning dew.
`;

const imageUrl = "https://cdn.mos.cms.futurecdn.net/eycTfSuRfkv8CcU7xsPYXE.jpg";

export default function Poem() {
  return (
    <div>
      <Page title={title} content={content} image={imageUrl} />
    </div>
  );
}
