const data = {};

export const log = (name) => {
  data[name] = (data[name] || 0.5) + 0.5;
  console.log(`RENDER: ${name} => ${data[name]}`);
};
