import Button from "./components/button";
import Badge from "./components/Badge";
import Card from "./components/card";
import { pricingPlans } from "./pricingData";

function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-600">
            Pricing
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Simple pricing with everything you need to grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} featured={plan.Popular}>
              <div className="mb-5 min-h-7">
                {plan.Popular && <Badge>Most Popular</Badge>}
              </div>

              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>

              <p className="mt-2 min-h-12 text-gray-600">{plan.description}</p>

              <div className="my-6">
                <span className="text-5xl font-bold text-gray-900">
                  ${plan.Price}
                </span>

                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="font-bold text-purple-600">✓</span>

                    {feature}
                  </li>
                ))}
              </ul>

              <Button>Get Started</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
