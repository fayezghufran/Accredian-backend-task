const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  const { referrerName, refereeName } = req.body;

  if (!referrerName || !refereeName) {
    return res.status(400).json({ error: 'Both referrerName and refereeName are required' });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: {
        referrerName,
        refereeName,
      },
    });
    res.status(201).json({ message: 'Referral created successfully', referral: newReferral });
  } catch (error) {
    console.error('Error creating referral:', error);
    res.status(500).json({ error: 'Failed to create referral', details: error.message });
  }
};

module.exports = {
  createReferral,
};
