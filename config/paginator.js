const getPaginatorData = (items, page, limit) => {
  const { count: totalItems, rows: data } = items;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, data, totalPages, currentPage };
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

module.exports = {
  getPagination,
  getPaginatorData,
};
