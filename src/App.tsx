import { useState } from "react";
import Form from "./components/Form";
import ListTable from "./components/ListTable";
import { Box, Center, Image } from "@chakra-ui/react";

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
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://1.gravatar.com/avatar/2c266fb7631a6cf08471ff13ab3a5f9326e53144a247e7cf414da2458b1a3043?size=256"
          alt="Dan Abramov"
        />
      </Box>
      <Form
        // onClickingSubmit={handleFormSubmit}
        getFromChild={getFromChild}
      />
      <ListTable
        objParam={filterData}
        deleteItem={deleteFromItemData}
        selectedData={togleItem}
      />
    </>
  );
}

export default App;
