import { useState } from "react";
import Form from "./components/Form";
import ListTable from "./components/ListTable";

function App() {
  const [ItemsData, setItemData] = useState([
    {
      description: "bying banana",
      amount: 4,
      category: "Entertaiment",
    },
    {
      description: "banana",
      amount: 5,
      category: "Utilities",
    },
    {
      description: "bying banana",
      amount: 4,
      category: "Groceries",
    },
    {
      description: "Last",
      amount: 4,
      category: "But not least",
    },
  ]);

  const handleFormSubmit = () => {
    setItemData([
      ...ItemsData,
      {
        description: "new",
        amount: 33,
        category: "Added",
      },
    ]);
  };

  function getFromChild(data: any) {
    setItemData([...ItemsData, data]);
  }

  function deleteFromItemData(data: any) {
    setItemData(ItemsData.filter((dataToDelete) => dataToDelete !== data));
  }

  const [selectedItem, setSelectedItem] = useState("All Categories");

  function togleItem(data: string) {
    setSelectedItem(data);
  }

  const filterData =
    selectedItem === "All Categories"
      ? ItemsData
      : ItemsData.filter((item) => item.category === selectedItem);

  // const tableItem = ItemsData.map((element) => {
  //   return element.description;
  // });

  return (
    <div>
      <Form
        // onClickingSubmit={handleFormSubmit}
        getFromChild={getFromChild}
      ></Form>
      <ListTable
        objParam={filterData}
        deleteItem={deleteFromItemData}
        selectedData={togleItem}
      />
    </div>
  );
}

export default App;
