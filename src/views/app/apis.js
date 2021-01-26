import axios from "axios";

export const getAddressData = async (postCode) => {
  let addressData = {
    error: false,
    errorMessage: "",
  };
  const response = await axios
    .get(`${process.env.REACT_APP_ADDRESS_API_URL}/${postCode}`)
    .catch(function (error) {
      addressData.error = true;
      addressData.errorMessage = error.response
        ? error.response.data.error
        : error;
      return addressData;
    });

  if (response.data) {
    addressData.postcode = response.data.result.postcode;
    addressData.longitude = response.data.result.longitude;
    addressData.latitude = response.data.result.latitude;
    addressData.region = response.data.result.region;
    addressData.admin_district = response.data.result.admin_district;
  }
  return addressData;
};
