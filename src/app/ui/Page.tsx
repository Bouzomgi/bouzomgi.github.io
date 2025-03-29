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
        <div className="piece">
          {title && <h1 className="title">{title}</h1>}

          <pre className="content">{content}</pre>

          {authorNote && <aside className="authorNote">{authorNote}</aside>}
        </div>
        {image && <img src={image} alt={`Image for ${title}`} />}
      </div>
    </div>
  );
}
