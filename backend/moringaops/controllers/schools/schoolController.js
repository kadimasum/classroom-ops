const School = require('../../Model/schools/school.model');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

exports.create = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const existingSchool = await School.findOne({ 
      where: { 
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone,
        location: req.body.location,  
      }
    });

    if (existingSchool) {
      return res.status(409).json({ message: 'A school with the same name, email, phone, location already exists.' });
    }

    const school = await School.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      location: req.body.location,  
    });
    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (school) {
      res.json(school);
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (school) {
      // Check if a school with the same email, name, and phone number already exists
      const existingSchool = await School.findOne({
        where: {
          email: req.body.email,
          name: req.body.name,
          phone: req.body.phone,
          location: req.body.location,
          id: { [Op.ne]: req.params.id } // exclude the current school from the query
        },
        attributes: { exclude: ['password'] } // Exclude password field from the query
      });

      if (existingSchool) {
        res.status(409).json({ message: 'School with the same email, name, and phone number already exists' });
      } else {
        await school.update(req.body);
        res.json({ message: 'School updated successfully' });
      }
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.delete = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (school) {
      await school.destroy();
      res.json({ message: 'School deleted' });
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
