type ItemData = {
  id: number;
  itemName: string;
  itemDesc: string;
};
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CloseIcon from "./snippets/CloseIcon";
import { useEffect } from "react";
export const AddItemForm = ({
  closeModal,
  addItem,
  updateData,
  updateItem,
}: {
  closeModal: () => void;
  addItem: (data: ItemData) => void;
  updateData: ItemData | null;
  updateItem: (id: number, data: ItemData) => void;
}) => {
  const formSchema = z.object({
    itemName: z.string().min(3).max(20),
    itemDesc: z.string().min(5),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ItemData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      itemDesc: "",
    },
  });

  function onSubmit(data: ItemData) {
    if (updateData) {
      updateItem(updateData.id, data);
    } else {
      addItem(data);
      closeModal();
    }
  }
  useEffect(() => {
    if (updateData) {
      reset(updateData);
    } else {
      reset({ itemName: "", itemDesc: "" });
    }
  }, [updateData]);
  return (
    <div className="px-10 py-8 font-poppins relative">
      <div
        className="absolute top-4 right-5 z-10 cursor-pointer text-gray-500"
        onClick={() => closeModal()}
      >
        <CloseIcon width="20" height="20" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label
            htmlFor="item_name"
            className="text-lg text-gray-700 font-medium my-1"
          >
            Item Name
          </label>
          <input
            type="text"
            id="item_name"
            placeholder="item name..."
            className="my-0.5 outline outline-2 outline-gray-300 rounded px-2 py-1 focus:outline-sky-500 text-gray-700"
            {...register("itemName")}
          />
          {errors.itemName && (
            <small className="text-red-500 italic">
              {errors.itemName.message}
            </small>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="item_desc"
            className="text-lg text-gray-700 font-medium my-1"
          >
            Item Descrtiption
          </label>
          <textarea
            rows={2}
            id="item_desc"
            placeholder="item desc..."
            className="my-0.5 outline outline-2 outline-gray-300 rounded px-2 py-1 focus:outline-sky-500 text-gray-700"
            {...register("itemDesc")}
          ></textarea>
          {errors.itemDesc && (
            <small className="text-red-500 italic">
              {errors.itemDesc.message}
            </small>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-sky-500 text-white font-medium px-3 py-1 my-3 rounded hover:bg-sky-600"
          >
            {updateData ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};
