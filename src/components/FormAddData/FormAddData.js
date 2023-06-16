import React from "react";
import { useForm } from "react-hook-form";
import "./FormAddData.css";
function FormAddData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form-container p-5">
      <h1 className="form-title mb-4 text-center">
        {" "}
        Tambahkan data anggota silsilah kerajaan
      </h1>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex gap-3">
          <div className="form-avatar col-auto me-4"></div>
          <div className="form-basic-data col-4">
            <div className="form-field d-flex">
              <div className="me-1">
                <input
                  type="text"
                  placeholder="Nama Depan"
                  {...register("Nama Depan", { required: true, maxLength: 80 })}
                />
              </div>
              <div className="ms-1">
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  {...register("Nama Belakang", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
            </div>

            <select {...register("Jenis Kelamin", { required: true })}>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <div className="form-field d-flex">
              <div className="me-1">
                <input
                  type="datetime"
                  placeholder="Tanggal Lahir"
                  {...register("Tanggal Lahir", { required: true })}
                />
              </div>
              <div className="ms-1">
                <input
                  type="datetime"
                  placeholder="Tanggal Wafat"
                  {...register("Tanggal Wafat", {})}
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Tempat Lahir"
              {...register("Tempat Lahir", { required: true })}
            />
            <button className="btn-submit" type="submit">Tambah Data</button>
          </div>
          <div className="form-rels-data col-6"> hae</div>
        </form>
      </div>
    </div>
  );
}

export default FormAddData;
