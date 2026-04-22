import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods",
    {
      cache: "no-store", // always fresh data
    }
  );

  const data = await res.json();
  const foods = data.data;

  return (
    <section className="min-h-screen bg-base-200 py-10 px-4">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-primary">
          🍔 Delicious Foods
        </h1>
        <p className="text-gray-500 mt-3">
          Explore our fresh and tasty food collection
        </p>

        <div className="divider max-w-xs mx-auto"></div>

        <p className="badge badge-primary badge-lg">
          Total Foods: {foods.length}
        </p>
      </div>

      {/* Food Grid */}
      <div className="grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
      ">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default FoodsPage;