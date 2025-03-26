import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.params.id } });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.update({ where: { id: req.params.id }, data: { name, email } });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await prisma.user.delete({ where: { id: req.params.id } });
  res.json({ message: "User deleted" });
};
