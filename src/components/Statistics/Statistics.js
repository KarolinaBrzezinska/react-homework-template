import {Wrapper, StatisticsWrapper, StatList } from './Statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <StatisticsWrapper className="statistics">
        <h2 className="title">{title}</h2>

        <StatList className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          ))}
        </StatList>
      </StatisticsWrapper>
    </Wrapper>
  );
};
