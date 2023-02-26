import { useState } from "react";
import { useCompanyContext } from "./useCompanyContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./../hooks/useAuthContext";

export const useCompanykey = () => {
  const history = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(null);
  const { dispatch } = useCompanyContext();
  const { user } = useAuthContext();

  const checkcompany = async (companykey) => {
    setIsloading(true);
    setError(null);

    const response = await fetch("/api/company/checkcompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        companykey,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsloading(false);
      setError(json.error);
    }
    if (response.ok) {
      window.alert("entered your company");
      history("/Dashboard");
      localStorage.setItem("Company", JSON.stringify(json));

      dispatch({ type: "COMPANY_KEY", payload: json });

      setIsloading(false);
    }
  };
  if (user) {
    checkcompany();
  }
  return { checkcompany, isLoading, error };
};

export default useCompanykey;
