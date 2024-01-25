import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  // onClickingSubmit: (data: any) => void;
  getFromChild: (newData: {}) => void;
}

const Form = ({ getFromChild }: Props) => {
  const schema = z.object({
    description: z
      .string()
      .min(3, { message: "Description should be atleast 3 characters long" }),
    amount: z.number({ invalid_type_error: "Amount is Required" }),
    category: z.string().min(1, { message: "Category is Required" }),
  });

  type shape = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<shape>({
    resolver: zodResolver(schema),
  });
  const handleSubmitClick = (data: FieldValues) => {
    // console.log(data);
    getFromChild(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleSubmitClick(data);
        reset();
      })}
    >
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
          placeholder="Milk"
        />
        {errors.description && (
          <p className="text-danger">{errors.description?.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="amount"
          placeholder="5"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount?.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select {...register("category")} className="form-select" id="category">
          <option value=""></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertaiment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>

      <button
        disabled={!isValid}
        type="submit"
        className="btn btn-primary"
        id="button_1"
        // onClick={onClickingSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
