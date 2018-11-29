export const AUTHENTICATED = localStorage.getItem("token");

export const headers=() =>{
  return {
    headers: { Authorization: `Bearer ${AUTHENTICATED}` }
  };
};
