import DeleteIcon from "./snippets/DeleteIcon";
import EditIcon from "./snippets/EditIcon";

type ItemData = {
  id: number;
  itemName: string;
  itemDesc: string;
};
export const Card = ({
  data,
  openUpdateModal,
  deleteItem,
}: {
  data: ItemData;
  openUpdateModal: (data: ItemData) => void;
  deleteItem: (id: number) => void;
}) => {
  return (
    <div className="card_box font-poppins border border-solid border-gray-200 shadow-md  bg-white overflow-hidden flex flex-col">
      <div className="flex flex-col py-5">
        <h2 className="my-0.5 text-2xl px-5 text-gray-800 font-medium ">
          {data.itemName}
        </h2>
        <p className="text-gray-500 px-5">{data.itemDesc}</p>
      </div>
      <div className="flex mt-auto">
        <button
          className="border border-solid border-gray-200 text-gray-500 py-2 w-1/2 place-content-center flex gap-2"
          onClick={() => deleteItem(data.id)}
        >
          <DeleteIcon width="20" height="20" />  Delete
        </button>
        <button
          className="border border-solid border-gray-200 text-gray-500 py-2 w-1/2 place-content-center flex gap-2"
          onClick={() => openUpdateModal(data)}
        >
         <EditIcon width="20" height="20"/> Edit
        </button>
      </div>
    </div>
  );
};
