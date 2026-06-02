function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md animate-pulse h-full">

      {/* IMAGE SKELETON */}
      <div className="w-full h-36 md:h-48 bg-gray-300" />

      {/* CONTENT */}
      <div className="p-4 md:p-5 flex flex-col justify-between h-[220px] md:h-[240px]">

        <div>

          {/* TITLE */}
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>

          {/* PRICES */}
          <div className="mt-3 space-y-2">

            <div className="h-4 bg-gray-300 rounded w-2/3"></div>

            <div className="h-4 bg-gray-300 rounded w-1/2"></div>

          </div>

          {/* STATUS */}
          <div className="mt-4">
            <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-5">
          <div className="h-11 bg-gray-300 rounded-2xl"></div>
        </div>

      </div>
    </div>
  );
}

export default ProductCardSkeleton;