import Link from "next/link";

function AmountStats({}) {
  return (
    <>
      <div className="stats bg-base-100 shadow-xl">
        <div className="stat">
          <div className="stat-title">Amount to be Collected</div>
          <div className="stat-value">IDR 12.5M</div>
          <div className="stat-actions">
            <Link href="/transactions">
            <button className="btn btn-xs">View Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="stats bg-base-100 shadow-xl">
        <div className="stat">
          <div className="stat-title">Cash in hand</div>
          <div className="stat-value">IDR 6.100K</div>
          <div className="stat-actions">
          <Link href="/transactions">
            <button className="btn btn-xs">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AmountStats;
