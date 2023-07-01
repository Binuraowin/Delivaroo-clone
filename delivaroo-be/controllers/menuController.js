const Menu = require('../models/menu.model');

const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menus' });
  }
};

const getMenuById = async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findByPk(id);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu' });
  }
};

const createMenu = async (req, res) => {
  const { name } = req.body;
  try {
    const newMenu = await Menu.create({ name });
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ message: 'Error creating menu' });
  }
};

module.exports = {
  getAllMenus,
  getMenuById,
  createMenu,
};
