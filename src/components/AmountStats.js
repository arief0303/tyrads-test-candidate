function AmountStats({}) {
  return (
    <>
      <div className="stats bg-base-100 shadow-xl">
        <div className="stat">
          <div className="stat-title">Amount to be Collected</div>
          <div className="stat-value">$25,600</div>
          <div className="stat-actions">
            <button className="btn btn-xs">View Users</button>
          </div>
        </div>
      </div>
      <div className="stats bg-base-100 shadow-xl">
        <div className="stat">
          <div className="stat-title">Cash in hand</div>
          <div className="stat-value">$5,600</div>
          <div className="stat-actions">
            <button className="btn btn-xs">View Members</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AmountStats;
