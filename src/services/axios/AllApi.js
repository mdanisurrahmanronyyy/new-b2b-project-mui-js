import axiosInstance from "./api";

export const searchFlights = (payload) => {
  let url = `api/search`;
  return axiosInstance.post(url, payload);
};

export const s3URL =
  "https://fstuploaddocument.s3.ap-southeast-1.amazonaws.com/";

export const resetPassword = (payload) => {
  let url = `api/user/ResetPassword`;
  return axiosInstance.put(url, payload);
};

export const getAirTicketingInfo = (payload) => {
  let url = `api/B2BReport/AirTicketingSearch`;
  return axiosInstance.post(url, payload);
};

export const getFareRules = (payload) => {
  let url = `api/FareRules`;
  return axiosInstance.post(url, payload);
};

export const uploadPassport = (passportNo, payload) => {
  let url = `api/B2BInfo/passengerupload/1/${passportNo}`;
  return axiosInstance.post(url, payload);
};
export const uploadVisaCopy = (passportNo, payload) => {
  let url = `api/B2BInfo/passengerupload/2/${passportNo}`;
  return axiosInstance.post(url, payload);
};
export const getSearchLogsByUser = () => {
  let url = `api/B2BReport/SearchLogsByUser`;
  return axiosInstance.get(url);
};

export const highestTicktedAirlinesapi = (payload) => {
  let url = `api/B2BDashboard/HighestTicktedAirlines`;
  return axiosInstance.post(url, payload);
};

export const getCalendarEventBooking = (date) => {
  let url = `api/B2BDashboard/GetCalendarEventBooking/${date.year}/${
    date.month - 1
  }`;
  return axiosInstance.get(url);
};

export const updateUser = (payload) => {
  let url = `api/user/B2BProfileEdit`;
  return axiosInstance.put(url, payload);
};

export const uploadB2BLogo = (ui, payload, config) => {
  let url = `api/user/uploadB2B/${ui}`;
  return axiosInstance.post(url, payload, config);
};

export const getAccountManager = (ui) => {
  let url = `api/B2BAccountManager/GetByAgentId/${ui}`;
  return axiosInstance.get(url);
};

export const addticketRefundRequest = (utid, ticketNumber) => {
  let url = `api/B2BTicketInfo/RefundRequest/${utid}/${ticketNumber}`;
  return axiosInstance.put(url);
};

export const getAgentPassengers = (id, currentPage, pageSize) => {
  let url = `api/B2BInfo/AgentPassengers?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.post(url, {agentId: id});
};

export const addSaveAgentPassenger = (payload) => {
  let url = `api/B2BInfo/SaveAgentPassenger`;
  return axiosInstance.post(url, payload);
};

export const addSaveAgentPassengerUpdate = (payload) => {
  let url = `api/B2BInfo/SaveAgentPassenger`;
  return axiosInstance.post(url, payload);
};

export const passengerListByIds = (uid) => {
  let url = `api/B2BReport/PassengerListByIds/All/${uid}`;
  return axiosInstance.get(url);
};

export const getAgentStaffs = (id, currentPage, pageSize) => {
  let url = `api/B2BStaff/GetAgentStaffs/${id}?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.get(url);
};
export const addB2BStaff = (payload) => {
  let url = `api/B2BStaff`;
  return axiosInstance.post(url, payload);
};
export const editB2BStaff = (payload) => {
  let url = `api/B2BStaff`;
  return axiosInstance.put(url, payload);
};

export const getsubjectList = () => {
  let url = `/api/Dropdown/SupportSubjects`;
  return axiosInstance.get(url);
};
export const getSupportInfoesByStatustList = (
  id,
  status,
  searchSubjectId,
  currentPage,
  pageSize
) => {
  let url = `/api/B2BSupportInfo/SupportInfoesByStatus/${id}/${status}/${searchSubjectId}?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.get(url);
};

export const getSupport = () => {
  let url = `/api/B2BSupportInfo`;
  return axiosInstance.get(url);
};

export const passengerListByPnr = (pnr) => {
  let url = `/api/B2BReport/PassengerListByPnr/${pnr}`;
  return axiosInstance.get(url);
};

export const getSupportHistoriesByAgentList = (agentId, supportId, isAgent) => {
  let url = `/api/B2BSupportHistory/SupportHistoriesByAgent/${agentId}/${supportId}/${isAgent}`;
  return axiosInstance.get(url);
};

export const getsupporttypeList = () => {
  let url = `/api/Dropdown/SupportTypes`;
  return axiosInstance.get(url);
};

export const supportFileUpload = (payload, config) => {
  let url = `/api/B2BSupportInfo/Upload`;
  return axiosInstance.post(url, payload, config);
};

export const PostSupportInfo = (payload) => {
  let url = `/api/B2BSupportInfo`;
  return axiosInstance.post(url, payload);
};

export const supportHistory = (payload) => {
  let url = `/api/B2BSupportHistory`;
  return axiosInstance.post(url, payload);
};

export const historyFileUpload = (payload, config) => {
  let url = `/api/B2BSupportHistory/Upload`;
  return axiosInstance.post(url, payload, config);
};

export const supportInfoPut = () => {
  let url = `/api/B2BSupportHistory`;
  return axiosInstance.put(url);
};

export const PutSupportInfo = () => {
  let url = `/api/B2BSupportInfo`;
  return axiosInstance.put(url);
};

export const supportInfoPost = () => {
  let url = `/api/api/B2BSupportInfo`;
  return axiosInstance.post(url);
};

export const depositRequest = (payload) => {
  let url = `/api/B2BBalance/DepositRequest`;
  return axiosInstance.post(url, payload);
};

export const uploadAttachment = (file) => {
  let url = `/api/B2BBalance/Upload`;
  return axiosInstance.post(url, file);
};

export const getBankAccounts = () => {
  let url = `api/Dropdown/bankaccounts`;
  return axiosInstance.get(url);
};

export const getAgentBankAccountsByAgent = (id) => {
  let url = `api/Dropdown/AgentBankAccountsByAgent?agentId=${id}`;
  return axiosInstance.get(url);
};

export const getAgentDeposits = (id, currentPage, pageSize) => {
  let url = `api/B2BBalance/AgentDeposits/${id}?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.get(url);
};

export const getAgentBankAccountsList = (id, currentPage, pageSize) => {
  let url = `api/B2BBankAccount/AgentBankAccountsByAgent/${id}?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.get(url);
};

export const addMyBankAccount = (payload) => {
  let url = `api/B2BBankAccount`;
  return axiosInstance.post(url, payload);
};

export const editMyBankAccount = (payload) => {
  let url = `api/B2BBankAccount`;
  return axiosInstance.put(url, payload);
};

export const getcityListbycountryName = (countryName) => {
  let url = `api/dropdown/CitiesByCountryName/${countryName}`;
  return axiosInstance.get(url);
};

export const getCities = () => {
  let url = `api/Dropdown/Cities`;
  return axiosInstance.get(url);
};

export const getUserAllInfo = () => {
  let url = `api/B2BInfo/GetByUserId`;
  return axiosInstance.get(url);
};

export const getGetCurrentUser = () => {
  let url = `api/user/GetCurrentUser`;
  return axiosInstance.get(url);
};

export const gatewayChargesByAgent = (agentId) => {
  let url = `api/PaymentGateway/GatewayChargesByAgent/${agentId}`;
  return axiosInstance.get(url);
};

export const getSalesReport = (payload, currentPage, pageSize) => {
  let url = `api/B2BReport/GetSalesReport?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.post(url, payload);
};

export const getAccountLedger = (payload, currentPage, pageSize) => {
  let url = `api/B2BAccountLadger/AgentAccountLadger?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.post(url, payload);
};

export const getCreditNote = (userId, currentPage, pageSize) => {
  let url = `api/B2BReport/GetCreditNoteByAgentId/${
    userId ?? 0
  }?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.get(url);
};

export const getBookingData = (payload, currentPage, pageSize) => {
  let url = `api/B2BReport/AirTicketing?pageNumber=${currentPage}&pageSize=${pageSize}`;
  return axiosInstance.post(url, payload);
};

export const getTicketData = (utid, status) => {
  let url = `api/B2BReport/AirTicketingDetails/${utid}/${status}`;
  return axiosInstance.get(url);
};

export const getSuccessBookingData = (utid, status) => {
  let url = `api/B2BReport/AirTicketingDetails/${utid}/${status}`;
  return axiosInstance.get(url);
};

export const cancelBooking = (payload) => {
  let url = `api/Cancel`;
  return axiosInstance.post(url, payload);
};

export const GetLimit = (payload) => {
  let url = `api/pnr`;
  return axiosInstance.post(url, payload);
};

export const sendEmailProposal = (payload) => {
  let url = `api/B2BEmail/SendModalEmail`;
  return axiosInstance.post(url, payload);
};

export const sendEmailSuccessTicket = (payload) => {
  let url = `api/Ticket/MailIssuedTicket`;
  return axiosInstance.post(url, payload);
};

export const getInvoiceData = (ids, utid) => {
  let url = `api/B2BReport/PassengerListByIds/${ids}/${utid}`;
  return axiosInstance.get(url);
};

export const InvoiceData = (payload) => {
  let url = `api/B2BReport/AirTicketing`;
  return axiosInstance.post(url, payload);
};

export const getSalesInvoice = (utid) => {
  let url = `api/B2BReport/OtherInvoice/${utid}`;
  return axiosInstance.get(url);
};

export const invoiceTicketInfo = (ids, utid) => {
  let url = `api/B2BReport/AirTicketing/${ids}/${utid}`;
  return axiosInstance.post(url);
};

export const getUserInfo = () => {
  let url = `api/B2BInfo/GetByUserId`;
  return axiosInstance.get(url);
};

export const requestPrice = (payload) => {
  let url = `${process.env.SERVER}/api/RePrice`;
  return axiosInstance.post(url, payload);
};

export const requestTicket = (payload) => {
  let url = `${process.env.SERVER}/api/Ticket`;
  return axiosInstance.post(url, payload);
};

export const updateBookingFareBreakdown = (payload) => {
  let url = `${process.env.SERVER}/api/B2BReport/UpdateBookingFareBreakdown`;
  return axiosInstance.post(url, payload);
};

export const TotalBooking = (payload) => {
  let url = `api/B2BDashboard/TotalBooking`;
  return axiosInstance.post(url, payload);
};

export const getTotalTicket = (payload) => {
  let url = `api/B2BDashboard/TotalTicket`;
  return axiosInstance.post(url, payload);
};

export const getTotalSales = (payload) => {
  let url = `api/B2BDashboard/TotalSales`;
  return axiosInstance.post(url, payload);
};

export const TicketIssue = (payload) => {
  let url = `api/Ticket/NewTicket`;
  return axiosInstance.post(url, payload);
};

export const TicketIssueImport = (payload) => {
  let url = `api/Ticket/ImportPnrTicket`;
  return axiosInstance.post(url, payload);
};

export const requestBook = (payload) => {
  let url = `${process.env.SERVER}/api/Book`;
  return axiosInstance.post(url, payload);
};

export const getTop20LatestNotification = () => {
  let url = `api/notification/GetTop20LatestNotification`;
  return axiosInstance.get(url);
};

export const marknotificationasread = (payload) => {
  let url = `api/notification/marknotificationasread/${payload}`;
  return axiosInstance.put(url);
};

export const notificationList = (payload) => {
  let url = `api/notification/NotificationList`;
  return axiosInstance.post(url, payload);
};

export const markAsAllRead = () => {
  let url = `/api/notification/MarkAllAsRead`;
  return axiosInstance.put(url);
};

export const limitTransaction = () => {
  let url = `/api/B2BStaff/transLimit`;
  return axiosInstance.get(url);
};

export const getTransactionHistory = (tnxNo) => {
  let url = `api/Invoice/TransactionHistory/${tnxNo}`;
  return axiosInstance.get(url);
};

export const getGatewayCharges = () => {
  let url = `api/PaymentGateway`;
  return axiosInstance.get(url);
};

export const requestOnlineDepositBrac = (payload) => {
  let url = `api/B2BBalance/CheckoutPaymentBrac`;
  return axiosInstance.post(url, payload);
};

export const usbpay = (payload) => {
  let url = `api/B2BBalance/CheckoutUsb`;
  return axiosInstance.post(url, payload);
};

export const serviceRequest = (payload) => {
  let url = `${process.env.SERVER}/api/ExtraService`;
  return axiosInstance.post(url, payload);
};

export const requestExtraServiceRePrice = (payload) => {
  let url = `${process.env.SERVER}/api/ExtraService/RePrice`;
  return axiosInstance.post(url, payload);
};

export const resetPasswordUser = (payload) => {
  let url = `/api/User/ResetPasswordB2B`;
  return axiosInstance.put(url, payload);
};

export const fetchTicketingVendor = (payload) => {
  let url = `/api/pnr/ImportPnrB2B`;
  return axiosInstance.post(url, payload);
};

export const saveImportPnr = (payload) => {
  let url = `/api/BookAdmin/manual-book-import`;
  return axiosInstance.post(url, payload);
};

export const  importPnr= (payload) => {
  let url = `/api/Ticket/ImportPnrTicket`;
  return axiosInstance.post(url, payload);
};

export const  imageSlider= () => {
  let url = `/api/PopUpMassage/10`;
  return axiosInstance.get(url);
};

export const  apigetPartialPaymentStatus= () => {
  let url = `/api/PartialPayment/GetPartialPaymentStatus`;
  return axiosInstance.get(url);
};

export const  apiApplyForPartialPayment= () => {
  let url = `/api/PartialPayment/ApplyForPartialPayment`;
  return axiosInstance.get(url);
};

export const  apirequestPartialPayments= (payload) => {
  let url = `/api/PartialPayment/checkPartialPaymentEligibility`;
  return axiosInstance.post(url, payload);
};

export const  apigetPartialPaymentInformation= (UniqueTransId) => {
  let url = `/api/PartialPayment/GetPartialPaymentInformation?UniqueTransId=${UniqueTransId}`;
  return axiosInstance.get(url);
};

export const  apigetTicketingList= (payload) => {
  let url = `/api/PartialPayment/GetPartialPaymentDueB2B?payload=${payload}`;
  return axiosInstance.get(url);
};

export const getApi=()=>{
  return `/api/PartialPayment/GetPartialPaymentDueB2B`;
}

export const getApiPartialpaid=()=>{
  return `/api/PartialPayment/GetPartialPaymentPaidB2B`;
}

export const  apigetPartialPaymentSettlement= (uniqueTransId,dueAmount) => {
  let url = `/api/PartialPayment/DueAmountSettlement?UniqueTransID=${uniqueTransId}&Amount=${dueAmount}`;
  return axiosInstance.get(url);
};

export const  apigetPartialPaymentdashboardstatus= () => {
  let url = `/api/PartialPayment/GetPartialPaymentB2BDashboardInfo?upcomingDayCount=800`;
  return axiosInstance.get(url);
};

export const  apigetUserConfigurationB2B= () => {
  let url = `/api/PartialPayment/GetUserConfigurationB2B`;
  return axiosInstance.get(url);
};

export const  apiB2BTicketImportSettings= () => {
  let url = `api/B2BTicketImportSettings/GetSettings`;
  return axiosInstance.get(url);
};

export const  apirequestEmailVerification= () => {
  let url = `/api/_2FA/RequestEmailVerification`;
  return axiosInstance.get(url);
};

export const  apiget2FAInfo= () => {
  let url = `/api/_2FA/Get2FAInfo`;
  return axiosInstance.get(url);
};

export const  apireuestForEmailVerificationOtp= () => {
  let url = `/api/_2FA/ReuestForEmailVerificationOtp`;
  return axiosInstance.get(url);
};

export const  apiverifyEmail= (userUTP) => {
  let url = `/api/_2FA/verifyEmail?otp=${userUTP}`;
  return axiosInstance.get(url);
};

export const  apitoggle2FA= () => {
  let url = `/api/_2FA/Toggle2FA`;
  return axiosInstance.get(url);
};

export const  apitoggle2FAEL= () => {
  let url = `/api/_2FA/Toggle2FAEL`;
  return axiosInstance.get(url);
};

export const  Marquee= () => {
  let url = `/api/B2BMarquee`;
  return axiosInstance.get(url);
};
