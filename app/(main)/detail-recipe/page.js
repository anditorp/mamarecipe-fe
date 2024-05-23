import React from "react";

const detailRecipe = () => {
  return (
    <main>
      <section className="flex flex-col items-center my-20">
        <div>
          <h1 className="text-secondary mb-10">Loream Sandwich</h1>
        </div>
        <div>
          <img src="/detail-recipe.png" alt="LoginImg" />
        </div>
      </section>
      <section>
        <div className="ml-[250px] w-1/2 mb-20">
          <ul className="list-disc list-inside ">
            <h3 className="text-tertiary font-semibold mb-8">Ingredeants</h3>
            <li className=" text-2xl font-medium text-tertiary mb-3">2 eggs</li>
            <li className=" text-2xl font-medium text-tertiary mb-3">
              2 tbsp mayonnaise
            </li>
            <li className=" text-2xl font-medium text-tertiary mb-3">
              3 slices bread
            </li>
            <li className=" text-2xl font-medium text-tertiary mb-3">
              a little butter
            </li>
            <li className=" text-2xl font-medium text-tertiary mb-3">
              ⅓ carton of cress
            </li>
            <li className=" text-2xl font-medium text-tertiary mb-3">
              2-3 slices of tomato or a lettuce leaf and a slice of ham or
              cheese
            </li>
            <li className=" text-2xl font-medium text-tertiary mb-3">
              crisps , to serve
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default detailRecipe;
