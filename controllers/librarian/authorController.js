const { serverError, itemNotFound } = require("../../helpers/helpers");
const Author = require("../../models/Author");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();

    return res.status(200).json({
      status: "success",
      data: authors,
    });
  } catch (e) {
    serverError(res, e);
  }
};

// create author....
const store = async (req, res) => {
  try {
    const author = await Author.create({
      name: req.body.name,
    });

    if (author) {
      return res.status(201).json({
        status: "success",
        message: "Author added successfully",
        data: author,
      });
    }
  } catch (e) {
    serverError(res, e);
  }
};

const getSingleAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (author) {
      return res.status(200).json({
        status: "success",
        data: author,
      });
    } else {
      itemNotFound(res, 404, "Author not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};
const update = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (author) {
      let name = req.body.name || author.name;

      await author.update(
        {
          name,
        },
        { where: { id: req.params.id } }
      );

      return res.status(200).json({
        status: "success",
        message: "Author updated successfully",
        data: author,
      });
    } else {
      itemNotFound(res, 404, "Author not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

const destroyAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (author) {
      await author.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "Author deleted successfully",
        data: author,
      });
    } else {
      itemNotFound(res, 404, "Author not found");
    }
  } catch (e) {
    serverError(res, e);
  }
};

module.exports = {
  store,
  getAllAuthors,
  getSingleAuthor,
  update,
  destroyAuthor,
};
