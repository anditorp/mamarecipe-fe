import React from "react";

const DetailRecipe = () => {
  return (
    <main>
      <section className="flex flex-col items-center my-20">
        <div>
          <h1 className="text-secondary mb-10 max-sm:text-[32px] ">
            Loream Sandwich
          </h1>
        </div>
        <div className="flex">
          <img
            src="/detail-recipe.png"
            alt="LoginImg"
            className="max-sm:h-[200px]"
          />
        </div>
      </section>
      <section>
        <div className="mx-auto w-1/2 mb-20">
          <ul className="list-disc list-inside">
            <h3 className="lg:text-6xl max-sm:text-4xl text-tertiary font-semibold mb-8">
              Ingredients
            </h3>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              2 eggs
            </li>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              2 tbsp mayonnaise
            </li>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              3 slices bread
            </li>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              a little butter
            </li>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              ⅓ carton of cress
            </li>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              2-3 slices of tomato or a lettuce leaf and a slice of ham or
              cheese
            </li>
            <li className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              crisps, to serve
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default DetailRecipe;
