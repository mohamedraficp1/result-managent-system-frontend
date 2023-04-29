import API from "../utils";
import urls from "../urls";
import { getCurrentUser } from "../../helpers/sessionStorageUtil";

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const getLeads = async (payload) => {
  console.log("Userid", getCurrentUser().id);
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.GET_LEAD_INFO}/${user}`, payload);
};

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const getSalesLeads = async (payload) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.GET_SALES_LEADS}/${user}`, payload);
};

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const getServiceLeads = async (payload) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.GET_SERVICE_LEADS}/${user}`, payload);
};

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const getGeneralLeads = async (payload) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.GET_GENERAL_LEADS}/${user}`, payload);
};

/**
 *
 * @param {string} dealerId - Request params
 * @returns Promise
 */
export const getLeadDetails = async (id) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.get(`${urls.GET_LEAD_INFO_DETAILS}/${user}/${id}`);
};

/**
 *
 * @param {string} dealerId - Request params
 * @returns Promise
 */
export const deleteLead = async (id) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.get(`${urls.DELETE_LEAD_INFO}/${user}/${id}`);
};

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const updateLeadInfo = async (payload) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.UPDATE_LEAD_INFO}/${user}`, payload);
};

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const updateDealer = async (payload) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.UPDATE_DEALER_INFO}/${user}`, payload);
};

/**
 *
 * @returns Promise
 */
export const getDealerDetails = async (id) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.get(`${urls.GET_DEALER_DETAILS}/${user}`);
};
