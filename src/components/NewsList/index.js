import "./styles.css";

function getDateString(dateTimeStr) {
  return new Date(dateTimeStr).toDateString();
}

const NewsItem = ({ item }) => (
  <div className="news-item">
    {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
    <div className="item-body">
      <div className="url">
        <a href={item.url}>
          <h5>{item.title}</h5>
        </a>
        <a href={item.url}>
          <p>{item.content}</p>
        </a>
      </div>

      <div className="publish-source">
        <div className="publish">
          <strong>Published at {getDateString(item.publishedAt)} </strong>
        </div>
        <div className="source">
          <small>{item.source.name}</small>
        </div>
      </div>
    </div>
  </div>
);

export const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news && news.length === 0 && <h4>There is no news available!!</h4>}
      {news && news.map((item) => <NewsItem key={item.title} item={item} />)}
    </div>
  );
};
