"use client";
import { BASE_URL } from "@/constant/links";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const AddUserForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Loading");
    try {
      const { data } = await axios.post(`${BASE_URL}/users/register`, {
        name,
        email,
        password,
        role,
      });

      if (data.success) {
        toast.success(data.message, { id });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id,
      });
      return err?.response?.data?.message || "Something went wrong";
    } finally {
      clearForm();
      location.reload();
      router.push("/admin/users");
    }
  };

  function clearForm() {
    setEmail("");
    setName("");
    setPassword("");
    setRole("admin");
  }
  return (
    <div className="border-2 border-[#1e1e5d] w-1/2 h-fit flex flex-col items-center justify-center gap-4">
      <form
        onSubmit={submitHandler}
        className="justify-center w-full p-8 flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Name*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Email*</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="outlined"
            type="text"
            className="mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Password*</label>

          <OutlinedInput
            className="mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Role*</label>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={role}
            className="mt-2 uppercase"
            onChange={(e) => setRole(e.target.value)}
            disabled
          >
            <MenuItem value={role} className="uppercase">
              {role}
            </MenuItem>
          </Select>
        </div>

        <button
          type="submit"
          className="text-[#1e1e5d] py-4 hover:bg-[#1e1e5d] border-2 border-[#1e1e5d] duration-300 hover:text-white font-bold transition-colors ease-linear"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForms;
