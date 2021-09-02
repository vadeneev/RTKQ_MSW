import "./styles.css";
import { useGetItemsQuery, useUpdateItemsMutation } from "./api/itemsApi";
import { useUpdateStuffMutation } from "./api/extraApi";
import { useCallback } from "react";

export default function App() {
  const { data, isFetching, isLoading, refetch } = useGetItemsQuery();
  const [updatePost, { isLoading: isUpdating }] = useUpdateItemsMutation();
  const [
    updateStuff,
    { isLoading: isStuffUpdating }
  ] = useUpdateStuffMutation();
  const handleUpdateClick = useCallback(updatePost, [updatePost]);
  const handleUpdateStuffClick = useCallback(updateStuff, [updateStuff]);
  const handleGetClick = useCallback(refetch, [refetch]);

  console.log(
    "useGetItemsQuery data",
    data,
    "isLoading :",
    isLoading,
    "isFetching :",
    isFetching
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleGetClick}>
        Get list data {isFetching.toString()}
      </button>
      <button onClick={handleUpdateClick}>
        Add random data {isUpdating.toString()}
      </button>
      <button onClick={handleUpdateStuffClick}>
        Update with another API {isStuffUpdating.toString()}
      </button>
    </div>
  );
}
