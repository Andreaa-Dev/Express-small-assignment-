let user = [
  { id: 1, name: "ChiuChiu", age: 3 },
  { id: 2, name: "Molang", age: 5 },
];

export function getUser(req, res) {
  return res.json(user);
}

export function createUser(req, res) {
  const id = uuidv4();
  const newUser = { id, name: req.body.name, age: req.body.age };
  user = [...user, newUser];
  return res.json(user);
}

export function deleteUser(req, res) {
  user = user.filter((item) => {
    return item.id !== Number(req.params.userId);
  });

  return res.json(user);
}

export function updateUserInformation(req, res) {
  const updateUser = user.find((item) => {
    return item.id === Number(req.params.userId);
  });
  if (!updateUser) {
    return res.status(404).json("user not found");
  }
  user = user.filter((item) => {
    return item.id !== Number(req.params.userId);
  });
  user = [...user, { ...updateUser, ...req.body }];
  return res.json(user);
}
