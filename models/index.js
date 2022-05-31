// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// A Product belongs to a single Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// A Product belongs to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// A Tag belongs to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};