import { useCallback, useState } from "react";

export const useEditMode = (initialState = false) => {
  const [isEditing, setIsEditing] = useState(initialState);

  const startEditing = useCallback(() => setIsEditing(true), []);
  const stopEditing = useCallback(() => setIsEditing(false), []);
  const toggleEditing = useCallback(
    (isEditing) => setIsEditing(!isEditing),
    []
  );

  return { isEditing, startEditing, stopEditing, toggleEditing };
};
