

const title = ({ title, coloredWord }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{coloredWord} </span>
      </h2>
    </div>
  );
};

export default title