export const AUTHENTICATED = localStorage.getItem("token");
export const ISLOGGEDIN = JSON.parse(localStorage.getItem("isLoggedIn"));
export const headers=() =>{
  return {
    headers: { Authorization: `Bearer ${AUTHENTICATED}` }
  };
};
