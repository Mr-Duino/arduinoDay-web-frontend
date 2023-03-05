import React, { useState } from "react";
import { motion as m } from "framer-motion";
import db from "../../utils/firebase-config";
import {
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";
import { Link } from "react-router-dom";


type Props = {};

function Register({ }: Props) {
  const [fname, setFName] = useState(""); // Full Name
  const [email, setEmail] = useState(""); // Email
  const [uniorscl, setUniOrScl] = useState(""); // University or School
  const [eduName, setEduName] = useState(""); // University or School Name
  const [phone, setPhone] = useState(""); // Phone
  const [day1, setDay1] = useState(false); // Day 1 Attend Yes or No
  const [day2, setDay2] = useState(false); // Day 2 Attend Yes or No
  const [hackthon, setHackthon] = useState(""); // Attend Hackthon

  const [teamName, setTeamName] = useState(""); // Team Name
  const [m1fname, setM1FName] = useState(""); // Member 1 Full Name
  const [m1email, setM1Email] = useState(""); // Member 1 Email
  const [m1uniorscl, setM1UniOrScl] = useState(""); // Member 1 University or School
  const [eduM1Name, setEduM1Name] = useState(""); //Member 1 University or School Name
  const [m1phone, setM1Phone] = useState(""); // Member 1 Phone

  const [m2fname, setM2FName] = useState(""); // Member 2 Full Name
  const [m2email, setM2Email] = useState(""); // Member 2 Email
  const [m2uniorscl, setM2UniOrScl] = useState(""); // Member 2 University or School
  const [eduM2Name, setEduM2Name] = useState(""); //Member 2 University or School Name
  const [m2phone, setM2Phone] = useState(""); // Member 2 Phone

  const [formSubmited, setFormSubmitted] = useState(false);
  const [exists, setExists] = useState(false);

  const onOptionChange = (event: any) => {
    setHackthon(event.target.value);
  };

  const onOptionChangeEdu = (event: any) => {
    setUniOrScl(event.target.value);
  };

  const onOptionChangeEduM1 = (event: any) => {
    setM1UniOrScl(event.target.value);
  };

  const onOptionChangeEduM2 = (event: any) => {
    setM2UniOrScl(event.target.value);
  };

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const docData = {
      FullName: fname,
      Email: email,
      University_or_School: uniorscl,
      Education_center_Name: eduName,
      Phone: phone,
      Attends: {
        Day_One: day1,
        Day_Two: day2,
      },
      Hackthon: hackthon,
      TeamName: teamName,
      Member_One: {
        FullName: m1fname,
        Email: m1email,
        University_or_School: m1uniorscl,
        Education_center_Name: eduM1Name,
        Phone: m1phone,
      },
      Member_Two: {
        FullName: m2fname,
        Email: m2email,
        University_or_School: m2uniorscl,
        Education_center_Name: eduM2Name,
        Phone: m2phone,
      },
    };
    const docRef = doc(db, "Arduino_Day_Registration", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setExists(true);
    } else {
      console.log("No such document!");
      await setDoc(doc(db, "Arduino_Day_Registration", email), docData);
      setFormSubmitted(true);
    }
  };

  const style = {
    formLableStyle: "text-30 font-medium text-md",
    formFieldStyle:
      "border-2 bg-10/0 border-30 rounded-md w-[100%] h-9 mt-2 md:h-10 active:border-70 focus:border-70 active:outline-none focus:outline-none text-30 font-medium px-3",
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-3 mt-10 max-w-[1000px]">
          <m.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-70 text-8xl font-semibold">Why</h1>
            <br />
            <h1 className="text-30 font-semibold text-4xl -mt-3 ">
              Should I Register ?
            </h1>

            <p className="text-80 text-sm font-medium my-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.
            </p>

            {/* <button className='btn-1'>Let's Register</button> */}
          </m.div>
          <m.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex justify-center mt-7"
          >
            <img
              className="object-cover"
              src="/register-img.png"
              loading="lazy"
              alt="Registration Background Image"
            />
          </m.div>
        </div>
      </div>



      <m.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-20 max-w-4xl flex flex-col gap-10 mx-auto md:justify-center"
      >

        <div>
          <h3 className="text-30 text-md font-medium"><span className="text-70 font-bold">*</span>If you are participating to the Arduino Day, please Read More about <span className="text-70 underline cursor-pointer"> <Link to={'/dayone-regulations'}>Day 1</Link></span> Rules & Regulations & Read more about <span className="text-70 underline cursor-pointer"><Link to={'/daytwo-regulations'}>Day 2</Link></span> agenda & regulations.</h3>
        </div>

        <hr />

        {!formSubmited && (
          <form onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h4 className={style.formLableStyle}>Full Name</h4>
                <input
                  className={style.formFieldStyle}
                  type="text"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </div>

              <div>
                <h4 className={style.formLableStyle}>Email</h4>
                <input
                  className={style.formFieldStyle}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className={style.formLableStyle}>Student/Undergraduate</h4>
                  <div className="flex flex-row gap-5 mt-2 mb-5">
                    <div>
                      <input
                        className=""
                        type="radio"
                        id="student-radio"
                        name="status"
                        value="Student"
                        checked={uniorscl === "Student"}
                        onChange={(event) => onOptionChangeEdu(event)}
                      />{" "}
                      <span className="text-30 font-medium text-md">Student</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="undergraduate-radio"
                        name="status"
                        value="Undergraduate"
                        checked={uniorscl === "Undergraduate"}
                        onChange={(event) => onOptionChangeEdu(event)}
                      />{" "}
                      <span className="text-30 font-medium text-md">
                        Undergraduate
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className={style.formLableStyle}>School/University Name</h4>
                  <input
                    className={style.formFieldStyle}
                    type="text"
                    value={eduName}
                    onChange={(e) => setEduName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <h4 className={style.formLableStyle}>Phone Number</h4>
                <input
                  className={style.formFieldStyle}
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <hr />

              <div>
                <h4 className={style.formLableStyle}>
                  What is the date you are willing to participate
                </h4>
                <h5 className="text-30 font-normal text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam.
                </h5>
                <div className="flex flex-row gap-5 mt-2">
                  <div>
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={day1}
                      onChange={(e) => setDay1(e.target.checked)}
                    />{" "}
                    <span className="text-30 font-medium text-md">Day 1</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={day2}
                      onChange={(e) => setDay2(e.target.checked)}
                    />{" "}
                    <span className="text-30 font-medium text-md">Day 2</span>
                  </div>
                </div>
              </div>

              {day1 && (
                <div>
                  <h4 className={style.formLableStyle}>
                    Are you participating in the Hackathon ?
                  </h4>
                  <h5 className="text-30 font-normal text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                  </h5>
                  <div className="flex flex-row gap-5 mt-2">
                    <div>
                      <input
                        type="radio"
                        id="subscribe"
                        name="subscribe"
                        value="Yes"
                        checked={hackthon === "Yes"}
                        onChange={(event) => onOptionChange(event)}
                      />{" "}
                      <span className="text-30 font-medium text-md">Yes</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="subscribe"
                        name="subscribe"
                        value="No"
                        checked={hackthon === "No"}
                        onChange={(event) => onOptionChange(event)}
                      />{" "}
                      <span className="text-30 font-medium text-md">No</span>
                    </div>
                  </div>
                </div>
              )}

              <hr />
              {day1 && hackthon === "Yes" && (
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className={style.formLableStyle}>Team Name</h4>
                    <input
                      className={style.formFieldStyle}
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <h4 className={style.formLableStyle}>Full Name (Member 1)</h4>
                    <input
                      className={style.formFieldStyle}
                      value={m1fname}
                      onChange={(e) => setM1FName(e.target.value)}
                      type="text"
                      required
                    />
                  </div>

                  <div>
                    <h4 className={style.formLableStyle}>Email (Member 1)</h4>
                    <input
                      className={style.formFieldStyle}
                      type="email"
                      value={m1email}
                      onChange={(e) => setM1Email(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className={style.formLableStyle}>
                        Student/Undergraduate (Member 1)
                      </h4>
                      <div className="flex flex-row gap-5 mt-2 mb-5">
                        <div>
                          <input
                            type="radio"
                            id="student-radio"
                            name="status"
                            value="Student"
                            checked={m1uniorscl === "Student"}
                            onChange={(event) => onOptionChangeEduM1(event)}
                          />{" "}
                          <span className="text-30 font-medium text-md">
                            Student
                          </span>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="undergraduate-radio"
                            name="status"
                            value="Undergraduate"
                            checked={m1uniorscl === "Undergraduate"}
                            onChange={(event) => onOptionChangeEduM1(event)}
                          />{" "}
                          <span className="text-30 font-medium text-md">
                            Undergraduate
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className={style.formLableStyle}>
                        School/University Name (Member 1)
                      </h4>
                      <input
                        className={style.formFieldStyle}
                        type="text"
                        value={eduM1Name}
                        onChange={(e) => setEduM1Name(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className={style.formLableStyle}>
                      Phone Number (Member 1)
                    </h4>
                    <input
                      className={style.formFieldStyle}
                      type="text"
                      value={m1phone}
                      onChange={(e) => setM1Phone(e.target.value)}
                      required
                    />
                  </div>

                  <hr />

                  <div>
                    <h4 className={style.formLableStyle}>Full Name (Member 2)</h4>
                    <input
                      className={style.formFieldStyle}
                      type="text"
                      value={m2fname}
                      onChange={(e) => setM2FName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <h4 className={style.formLableStyle}>Email (Member 2)</h4>
                    <input
                      className={style.formFieldStyle}
                      type="email"
                      value={m2email}
                      onChange={(e) => setM2Email(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className={style.formLableStyle}>
                        Student/Undergraduate (Member 2)
                      </h4>
                      <div className="flex flex-row gap-5 mt-2 mb-5">
                        <div>
                          <input
                            type="radio"
                            id="student-radio"
                            name="status"
                            value="Student"
                            checked={m2uniorscl === "Student"}
                            onChange={(event) => onOptionChangeEduM2(event)}
                          />{" "}
                          <span className="text-30 font-medium text-md">
                            Student
                          </span>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="undergraduate-radio"
                            name="status"
                            value="Undergraduate"
                            checked={m2uniorscl === "Undergraduate"}
                            onChange={(event) => onOptionChangeEduM2(event)}
                          />{" "}
                          <span className="text-30 font-medium text-md">
                            Undergraduate
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className={style.formLableStyle}>
                        School/University Name (Member 2)
                      </h4>
                      <input
                        className={style.formFieldStyle}
                        type="text"
                        value={eduM2Name}
                        onChange={(e) => setEduM2Name(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className={style.formLableStyle}>
                      Phone Number (Member 2)
                    </h4>
                    <input
                      className={style.formFieldStyle}
                      type="text"
                      value={m2phone}
                      onChange={(e) => setM2Phone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center mt-10">
              <input className="btn-1 mb-8" type="submit" value="Register" />
            </div>
          </form>
        )}
        {/* Add your thank you note here */}
        {formSubmited && (
          <div className="flex flex-col justify-center items-center my-10">
            <h1 className="text-center text-4xl text-70 font-medium">Thank You !</h1>
            <p className="text-center text-sm text-30 font-medium">Thank you for registering for the Arduino Day 2023.</p>
            <div>
              <Link to={'/'}>
                <button className="btn-1 mt-10">Back To Home</button>
              </Link>
            </div>

          </div>
        )}
        {exists && (<div>You already Registed!</div>)}
      </m.div>
    </div>
  );
}

export default Register;
