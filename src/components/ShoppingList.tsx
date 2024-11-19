import { useRef, useState } from "react";
import { AddItemForm } from "./AddItemForm";
import { Card } from "./Card";
type ItemData = {
  id: number;
  itemName: string;
  itemDesc: string;
};
export const ShoppingList = () => {
  const itemForm = useRef<HTMLDialogElement | null>(null);
  const [updateData, setUpdateData] = useState<ItemData | null>(null);
  function openModal() {
    if (itemForm.current?.open) {
      itemForm.current.close();
      setUpdateData(null);
    } else {
      itemForm.current?.showModal();
    }
  }
  function openUpdateModal(data: ItemData) {
    setUpdateData(data);
    openModal();

  }
  const [listData, setListData] = useState<ItemData[]>([
    {
      itemName: "Strawberries",
      itemDesc: "16oz package of fresh organic strawberries",
      id: 0,
    },
    {
      itemName: "Sliced Bread",
      itemDesc: "Loaf of frsh sliced wheat bread",
      id: 1,
    },
  ]);

  function addItem(data: ItemData) {
    data.id = listData.length + 1;
    setListData((prev) => [...prev, data]);
  }
  function updateItem(id: number, data: ItemData) {
    listData.forEach((ele, i) => {
      if (ele.id == id) {
        data.id = id; //inseting id
        listData[i] = data;
      }
    });
    openModal();
  }
  function deleteItem(id: number) {
    let filteredArray = listData.filter((ele) => ele.id != id);
    setListData(filteredArray);
  }

  return (
    <div className="px-2 sm:px-5 py-6 font-roboto">
      <dialog
        ref={itemForm}
        className="outline outline-1 w-96 outline-gray-300 rounded shadow-md"
      >
        <AddItemForm
          closeModal={openModal}
          addItem={addItem}
          updateData={updateData}
          updateItem={updateItem}
        />
      </dialog>
      <div className="flex justify-between ">
        <h2 className="border-l-[10px] sm:border-l-[15px] border-solid border-sky-500 border-b-2 sm:border-b-4 px-2 inline-block text-2xl sm:text-4xl text-gray-600">
          Products
        </h2>
        <button
          className="bg-sky-500 text-white px-4 rounded text-base sm:text-base"
          onClick={() => openModal()}
        >
          Add Item
        </button>
      </div>
      {listData.length>0?(<>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 py-5 gap-5">
        {listData.map((ele, i) => (
          <Card
            key={i}
            data={ele}
            openUpdateModal={openUpdateModal}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      </>):(<>
      <div className="px-10 py-7 text-center font-medium text-3xl text-gray-700 font-poppins">Shopping List is empty...</div>
      </>)}
    </div>
  );
};
