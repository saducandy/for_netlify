import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import { ChangeHandler } from "react-hook-form";
import { TypeOf } from "zod";

interface Props {
  objParam: {
    description: string;
    amount: number;
    category: string;
  }[];
  deleteItem: (dataToDelete: any) => void;
  selectedData: (inputValue: string) => void;
}

const ListTable = ({ objParam, deleteItem, selectedData }: Props) => {
  const [sum, setSum] = useState(0);
  // const [selectedCategory, setCategory] = useState("All Categories");

  const handleOnchange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectedData(event.target.value);
  };

  useEffect(() => {
    let total = 0;
    objParam.forEach((element) => {
      total += element.amount;
    });
    setSum(total);
  }, [objParam]);

  const tableItem = objParam.map((element, index) => {
    const handleDeleteClick = () => {
      deleteItem(element);
    };

    return (
      <tr key={index}>
        <td>{element.description}</td>
        <td>{element.amount}</td>
        <td>{element.category}</td>
        <td>
          <button
            id="deleteBtn1"
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="form-group">
        <select className="form-select" id="category" onChange={handleOnchange}>
          <option value={"All Categories"}>All Categories</option>
          <option value={"Groceries"}>Groceries</option>
          <option value={"Utilities"}>Utilities</option>
          <option value={"Entertaiment"}>Entertaiment</option>
        </select>
      </div>

      <div className="my-custom-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tableItem}
            <tr>
              <td>Total</td>
              <td>{sum}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTable;
