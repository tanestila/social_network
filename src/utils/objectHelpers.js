export const updateObjectInArray = (
  items,
  itemId,
  objectPropName,
  newObjectProps
) => {
  items.map((obj) => {
    if (obj[objectPropName] === itemId) {
      return { ...obj, ...newObjectProps };
    }
    return obj;
  });
};
