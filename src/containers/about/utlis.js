const CalculateAge = () => {
  const dob = new Date("01/31/2003");
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
};

export const personalData = [
  {
    label: "name",
    value: "Zaw Lin Naing (aka) Norman",
  },
  {
    label: "age",
    value: CalculateAge(),
  },
  {
    label: "address",
    value: "Yangon, Myanmar",
  },
  {
    label: "email",
    value: "mrzawlinnaing1001@gmail.com",
  },
  {
    label: "contact no",
    value: "(+95) 9975983945",
  },
];
