"use client";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Loading");
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/users/login`,
        { email, password },
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message, { id });
        router.push("/admin/reviews");
      } else {
        toast.error(data.message, { id });
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id,
      });
    } finally {
      clearForm();
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className="border-2 border-[#1e1e5d] w-1/2 h-[30rem] flex flex-col items-center justify-center gap-8">
      <form
        onSubmit={loginHandler}
        className="justify-center w-full p-8 flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Email</label>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="standard"
            type="text"
            className="border-b-2 bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#1e1e5d]">Password</label>
          <Input
            id="standard-adornment-password"
            className="hover:border-b-[#1e1e5d] border-b-2 bg-transparent"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <button
          type="submit"
          className="text-[#1e1e5d] py-4 hover:bg-[#1e1e5d] border-2 border-[#1e1e5d] duration-300 hover:text-white font-bold transition-colors ease-linear"
        >
          Login
        </button>
      </form>

      <div className="flex flex-col gap-4 items-center justify-center">
        <Typography
          variant="caption"
          className="flex items-center gap-[5px] text-sm"
        >
          Not Admin?{" "}
          <Link
            href="/"
            className="!flex gap-[5px] !items-center text-[#1e1e5d]"
          >
            <HomeRoundedIcon className="size-6" /> Go to Home
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;
