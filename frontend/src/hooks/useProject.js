import { useState } from "react";
import { useProjectContext } from "./useProjectContext";
import { useNavigate } from "react-router-dom";
export const useProject = () => {
  const history = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useProjectContext();

  const project = async (projectname, description, startDate, endDate) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/project/creatproject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectname, description, startDate, endDate }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      history("/Dashboard");
      localStorage.setItem("project", JSON.stringify(json));

      dispatch({ type: "createproject", payload: json });

      setIsLoading(false);
    }
  };

  return { project, isLoading, error };
};
