import "@styles/narrowPage.css";

type PageProps = {
  title?: string;
  content: string;
  authorNote?: string;
  image?: string;
};

export default function Page({ title, content, authorNote, image }: PageProps) {
  return (
    <div className="main">
      <div className="page narrowPage">
        {title && <h1 className="title">{title}</h1>}

        <pre>{content}</pre>

        {image && <img src={image} alt={`Image for ${title}`} />}

        {authorNote && <aside className="authorNote">{authorNote}</aside>}
      </div>
    </div>
  );
}
