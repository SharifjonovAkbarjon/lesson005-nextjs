import React from "react";

const Detail = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();

  if (!data) return <div>Loading...</div>;

  const { title, price, description, images, rating, reviews } = data;

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex flex-row overflow-x-auto mb-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={title}
                  className="h-24 w-24 object-cover rounded-md mr-2 cursor-pointer"
                />
              ))}
            </div>
            <img
              src={images[0]}
              alt={title}
              className="w-full h-auto rounded-md mb-4"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-between text-black">
            <h2 className="text-2xl font-bold text-black">{title}</h2>
            <p className="text-lg font-semibold text-[#B88E2F]">Rs. {price}</p>
            <p className="mt-2 text-black">{description}</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-500">{rating} ⭐</span>
              <span className="ml-2 text-gray-500">
                ({reviews.length} Customer Reviews)
              </span>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Size</h4>
              <div className="flex space-x-2">
                {["L", "XL", "XS"].map((size) => (
                  <button key={size} className="border rounded-md px-3 py-1">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 ">
              <h4 className="font-semibold">Color</h4>
              <div className="flex space-x-2">
                <button className="border rounded-full w-8 h-8 bg-purple-600" />
                <button className="border rounded-full w-8 h-8 bg-black" />
                <button className="border rounded-full w-8 h-8 bg-gold" />
              </div>
            </div>

            <div className="mt-4 flex items-center text-black">
              <button className="border px-2 py-1">-</button>
              <span className="mx-2">1</span>
              <button className="border px-2 py-1">+</button>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="bg-[#B88E2F] text-white px-4 py-2 rounded transition hover:bg-[#a07426]">
                Add To Cart
              </button>
              <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded transition hover:bg-gray-200">
                + Compare
              </button>
            </div>

            <div className="mt-6">
              <p className="font-semibold">SKU: SS001</p>
              <p className="font-semibold">Category: Sofas</p>
              <p className="font-semibold">Tags: Sofa, Chair, Home, Shop</p>
              <div className="mt-2">
                <h4 className="font-semibold">Share:</h4>
                <div className="flex space-x-2">
                  <button className="border rounded-full px-3">FB</button>
                  <button className="border rounded-full px-3">LinkedIn</button>
                  <button className="border rounded-full px-3">Twitter</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-black">
          <h3 className="text-lg font-bold">Customer Reviews</h3>
          <ul className="mt-2">
            {reviews && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <li key={index} className="mt-2 border-b pb-2">
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p>Rating: {review.rating} ⭐</p>
                  <p>{review.comment}</p>
                  <p className="text-gray-500">{review.date}</p>
                </li>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
