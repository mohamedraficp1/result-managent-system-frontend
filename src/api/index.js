import { signIn } from "./services/auth";
import {
  getLeads,
  getLeadDetails,
  deleteLead,
  updateLeadInfo,
  getSalesLeads,
  getServiceLeads,
  getGeneralLeads,
  updateDealer,
  getDealerDetails,
} from "./services/user";

const API_SERVICE = {
  signIn,
  getLeads,
  getLeadDetails,
  deleteLead,
  updateLeadInfo,
  getSalesLeads,
  getServiceLeads,
  getGeneralLeads,
  updateDealer,
  getDealerDetails,
};

export { API_SERVICE };
