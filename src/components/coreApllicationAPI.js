import axios from "axios";

const getAllHolderCert = async (CustID) => {
  try {
    const getAllHoldersCertificatesUrl = `https://restserverstaging.cardinalstone.com/api/registrars/getAllHolderCert?CustID=${CustID}&AcrossReg=true`;
    const { data } = await axios.get(getAllHoldersCertificatesUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getHolderCert = async (accountNumber, registerID, CustID) => {
  try {
    const getHoldersCertificatesUrl = `https://restserverstaging.cardinalstone.com/api/registrars/getHolderCert?accountNumber=${accountNumber}&registerID=${registerID}&CustID=${CustID}&AcrossReg=false`;
    const { data } = await axios.get(getHoldersCertificatesUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllHolderCertTotal = async (CustID) => {
  try {
    const getAllHoldersCertTotalUrl = `https://restserverstaging.cardinalstone.com/api/registrars/getAllHolderCertTotal?CustID=${CustID}&AcrossReg=true`;
    const { data } = await axios.get(getAllHoldersCertTotalUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getHolderCertTotal = async (accountNumber, registerID, CustID) => {
  try {
    const getHoldersCertificatesUrl = `https://restserverstaging.cardinalstone.com/api/registrars/getHolderCertTotal?accountNumber=${accountNumber}&registerID=${registerID}&CustID=${CustID}&AcrossReg=false`;
    const { data } = await axios.get(getHoldersCertificatesUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllHolderKYC = async (CustID) => {
  try {
    const getHoldersCertificatesUrl = `https://restserverstaging.cardinalstone.com/api/registrars/getAllHolderKYC?CustID=${CustID}&AcrossReg=true`;
    const { data } = await axios.get(getHoldersCertificatesUrl);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  getAllHolderCert,
  getHolderCert,
  getAllHolderCertTotal,
  getHolderCertTotal,
  getAllHolderKYC,
};
