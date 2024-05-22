/**
 * Update Requests
 * @param {*} increase 
 */
function updateRequests(increase = true) {
  const requests =
    parseInt(localStorage.getItem("requests") || 0) + (increatse ? 1 : -1);
  localStorage.setItem("requests", Math.max(requests, 0));
  window.dispatchEvent(new CustomEvent("requestUpdated", { requests }));
}

function showLoader(url){
    return true;
}
export { updateRequests,showLoader };
