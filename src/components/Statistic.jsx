
function Statistic({ number, label }) {
  return (
    <div className="stats__item">
      <span className="stats__value">{number}</span>
      <span className="stats__label">{label}</span>
    </div>
  );
}

export default Statistic;