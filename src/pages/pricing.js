import Link from "next/link";
import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Personal",
      description: "Ideal for individual users",
      link: "/personal",
      buttonText: "Choose Personal"
    },
    {
      title: "Business",
      description: "Perfect for small businesses",
      link: "/business",
      buttonText: "Choose Business"
    },
    {
      title: "Premium",
      description: "For large enterprises and organizations",
      link: "/premium",
      buttonText: "Choose Premium"
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="Pricing flex justify-center items-center flex-wrap">
      {plans.map((plan, index) => (
        <div key={index} className="card bg-base-100 shadow-xl w-auto m-4">
          <article className="prose prose-xs">
            <h3 className="text-center p-4">{plan.title}</h3>
          </article>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{plan.description}</h2>
            <div className="card-actions">
              <Link href={plan.link}>
                <button className="btn btn-primary w-52">{plan.buttonText}</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Pricing;