export const validateName = (value) => {
  if (value === "") {
    return "Vous devez écrire quelque chose";
  }

  if (value.length < 2) {
    return "C'est un peu court";
  }

  if (value.length > 50) {
    return "C'est beaucoup trop long";
  }

  return false;
};
