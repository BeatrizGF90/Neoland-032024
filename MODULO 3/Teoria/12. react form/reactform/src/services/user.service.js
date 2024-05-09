import { updateToken } from "../utils";
import { APIUser } from "./service.config";

//! ---------- REGISTER ---------- //
export const registerUser = async(formData) => {
    return APIUser.post('/users/registerLargo', formData, {
        headers: {"Content-Type": "multipart/form-data",},
    })
    .then((res) => res)
    .catch((error) => error)
}

//! -------- BORRADO DEL USUARIO --- //
// ejemplo servicio user con autenticacion

export const deleteUserService = async () => {
    return APIUser.delete("/users/", {
      headers: {
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
};

//! ---------- UPDATE USER ----------- //

export const updateUser = async (formData) => {
    return APIUser.patch("/users/update/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${updateToken()}`,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };