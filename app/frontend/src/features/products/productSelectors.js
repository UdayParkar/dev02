export const selectFilteredSortedProducts = state => {
  let products = [...state.products.products];

  if (state.products.searchQuery) {
    const query = state.products.searchQuery.toLowerCase();
    products = products.filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  if (state.products.categoryFilter !== 'All') {
    products = products.filter(p => p.category === state.products.categoryFilter);
  }

  if (state.products.brandFilter !== 'All') {
    products = products.filter(p => p.brand === state.products.brandFilter);
  }

  switch (state.products.sortBy) {
    case 'priceLowHigh':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'priceHighLow':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'nameAZ':
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'ratingHighLow':
      products.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return products;
};

export const selectAllCategories = state => {
  const all = state.products.products.map(p => p.category);
  return ['All', ...new Set(all)];
};

export const selectAllBrands = state => {
  const all = state.products.products.map(p => p.brand);
  return ['All', ...new Set(all)];
};
