"use client";
import { ChangeEvent, FormEventHandler, useState } from "react";

const Main = () => {
  type showTimeProps = {
    hours: number;
    minutes: number;
    seconds: number;
  };

  const initialTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [showTime, setShowTime] = useState<showTimeProps>(initialTime);

  const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShowTime((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(showTime);
    // const timer = setInterval(
    //   () => {
    //     const sec = showTime.hours;
    //         setShowTime(showTime.hours - 1)
    //     if (sec === 0) clearInterval(timer);
    //     console.log(sec);
    //   },

    //   1000,
    // );
    setShowTime(initialTime);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="bg-slate-200 flex justify-center items-center gap-2"
      >
        <div className="flex flex-col">
          <label htmlFor="hours">Hours</label>
          <input
          placeholder="00"
            type="text"
            value={showTime.hours}
            name="hours"
            className="border border-black bg-white rounded-lg"
            onChange={inputOnChangeHandler}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="minutes">Minutes</label>
          <input
          placeholder="00"
            type="text"
            value={showTime.minutes}
            name="minutes"
            className="border border-black bg-white rounded-lg"
            onChange={inputOnChangeHandler}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="seconds">Seconds</label>
          <input
          placeholder="00"
            type="text"
            value={showTime.seconds}
            name="seconds"
            className="border border-black bg-white rounded-lg"
            onChange={inputOnChangeHandler}
          />
        </div>
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Main;
