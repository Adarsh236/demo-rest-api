const _serialize = (user) => ({
  id: user.id,
  name: user.name,
  dob: user.dob,
  address: user.address,
  description: user.description,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const serializer = (data, type) => {
  if (!data) return null;
  if (type === 'obj') return _serialize(data[0]);
  if (Array.isArray(data)) return data.map(_serialize);
  return _serialize(data);
};

export default serializer;
