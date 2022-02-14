export const getToken = () =>
  `Token ${JSON.parse(localStorage.getItem('user'))?.token.replace(/Token=[A-z0-9.]*/g, (str) => str.slice(6))}`;

export const redirectUser = () => {};
