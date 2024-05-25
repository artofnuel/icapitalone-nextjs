"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Tabs } from "antd";
import { useAccountStore } from "@/store/accountStore";
import { useMainStore } from "@/store";
import { validateForm } from "@/utils/validator"
import { Typography } from "antd";

const { Title } = Typography;

interface PasswordReset {
  email: string;
  password: string;
  code: string;
}

export default function LoginPage() {
  // constants
  const steps = {
    receiveCode: 1,
    confirmCode: 2,
    changePassword: 3
  }
  // hooks
  const router = useRouter();

  // stores
  const { sendResetCode, verifyResetCode, resetPassword } = useAccountStore();
  const { checkAuth } = useMainStore();
  // data
  const [resetData, setresetData] = useState<PasswordReset>({
    email: '',
    password: '',
    code: ''
  });

  const [btnText, setbtnText] = useState('Receive OTP');
  const [step, setStep] = useState(steps.receiveCode);

  // function
  const handleChange = (name: string, value: string) => {
    validateForm("login");
    setresetData({ ...resetData, [name]: value });
  };

  const nextStep = async () => {
    if (step == steps.receiveCode) {
      sendResetCode(resetData.email).then((sent) => {
        if (sent) {
          setStep(steps.confirmCode)
          setbtnText("Verify Code");
        } else {

        }
      })

    }
    else if (step == steps.confirmCode) {
      verifyResetCode(resetData.code).then((verified) => {
        if (verified) {
          setStep(steps.changePassword)
          setbtnText("Change Password");
        }
      })
    }
    else {
      // change password
      resetPassword(resetData.email,resetData.password ).then((done) => {
        router.push("/login")
      })
    }
  };

  useEffect(() => {
    validateForm("login");
  });

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4">
        <div className="w-10/12 h-auto mx-auto mb-2">
          <Title level={3}>Reset Password</Title>
        </div>
        {/* {JSON.stringify(resetData)} */}
        {step == steps.receiveCode && <div className="w-10/12 h-auto mx-auto relative">
          <i className="absolute right-4 top-5">
            <MdEmail />
          </i>
          <input
            type="email"
            name="email"
            required
            value={resetData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
            placeholder="Email Address"
            className="w-full h-auto p-3 border border-border rounded-md slide-from-left"
          />
        </div>
        }
        {step == steps.confirmCode && <div className="w-10/12 h-auto mx-auto relative">
          <i className="absolute right-4 top-5">
            <FaLock />
          </i>
          <input
            type="number"
            name="code"
            value={resetData.code}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("code", e.target.value)}
            placeholder="OTP"
            className="w-full h-auto p-3 border border-border rounded-md slide-from-left"
          />
        </div>}

        {step == steps.changePassword && <div className="w-10/12 h-auto mx-auto relative">
          <i className="absolute right-4 top-5">
            <FaLock />
          </i>
          <input
            type="password"
            name="password"
            value={resetData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("password", e.target.value)}
            placeholder="New Password"
            className="w-full h-auto p-3 border border-border rounded-md slide-from-left"
          />
        </div>}

        <div className="w-10/12 h-auto mx-auto">
        <button
          type="submit"
          id="login"
          className="btn btn-primary w-100 p-3"
          onClick={nextStep}
        >
          {btnText}
        </button>
        <div className="d-flex justify-content-end mt-2 w-100">
            <Link href="/login" className="ml-2 text-primary-light">
              <span>Back to Login</span>
            </Link>
          </div>
      </div>
      </div>
    </div>
  );
};
