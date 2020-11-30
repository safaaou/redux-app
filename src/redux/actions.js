export const chooseType = (data) => {
  return {
    type: "CHOOSE_TYPE",
    btn_radio: data
  };
};

export const chooseCategory = (data) => {
  return {
    type: "CHOOSE_CATEGORY",
    check: data
  };
};

export const chooseName = (data) => {
  return {
    type: "CHOOSE_NAME",
    name: data
  };
};

export const chooseEmail = (data) => {
  return {
    type: "CHOOSE_EMAIL",
    email: data
  };
};

export const choosePhone = (data) => {
  return {
    type: "CHOOSE_PHONE",
    phone: data
  };
};
