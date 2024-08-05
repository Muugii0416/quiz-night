import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import {  fadeInLeft } from "@/keyframes";
import Image from "next/image";
import moment from "moment";
import "moment/locale/mn";
const Tickets = () => {
  const now = moment();
  // Сарын эхний өдөр
  const firstDayOfMonth = now.startOf("month");
  // Энэ 7 хоногийн Tuesday өдрийн өдрийн дугаар
  const dayOfWeek = firstDayOfMonth.day(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const targetDayOfWeek = 2; // Tuesday

  // Сарын эхний өдөрт нэмэх өдрийн ялгаа
  const offset = (targetDayOfWeek - dayOfWeek + 7) % 7;
  let firstTuesday = firstDayOfMonth.add(offset, "days");

  // Хэрэв Tuesday сар дотор хэтрэх бол энэ сарын дараагийн Tuesday-ийг олох
  if (firstTuesday.isAfter(now.endOf("month"))) {
    firstTuesday = firstTuesday
      .add(1, "month")
      .startOf("month")
      .day(targetDayOfWeek);
  }
  
  return (
    <Container className="mb-44 scroll-mt-10" id="tickets">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Тасалбар</h2>
      </div>
      
      <Reveal keyframes={fadeInLeft} triggerOnce >
        <div className="flex flex-wrap justify-start gap-8">
          <div className="flex flex-col items-center gap-[13.846px] w-[120px] pb-[13.846px] bg-[#FFF] rounded-2xl">
            <div className="flex flex-col items-center gap-[13.846px] w-[120px] pb-[13.846px] bg-[#FFF] rounded-2xl">
              <div className="flex justify-center items-center p-[12.846px_23.077px_14.538px_25.923px] w-[120px] h-[70px] bg-[#d6d6d6] rounded-t-xl">
                <h1 className="font-bold text-2xl text-center text-[#303030]">
                  {now.format("M")} сар
                </h1>
              </div>

              <div className="flex flex-col justify-center items-center mt-[40px]">
                <h1 className="font-bold text-3xl text-center text-black">
                  2 дахь
                </h1>

                <h1 className="font-bold text-2xl text-center text-[#bab8b8] mt-[20px]">
                  Өдөр
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[80%] ">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/collections/scrollaw.jpg"
                alt="Ticket Background"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
                <h3 className="text-2xl font-bold mb-4">UB Quiz Night</h3>
                <p className="text-lg mb-4">Мягмар гараг бүр</p>
                <p className="text-lg mb-4">Хаяг: XYZ байр</p>
                <p className="text-lg mb-6">Үнэ: 10,000 MNT</p>
                <Button className="w-[100%] sm:w-[100%] h-[50px] from-[#B75CFF] to-[#671AE4]">
                  Тасалбар худалдаж авах
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      
      <Reveal keyframes={fadeInLeft} triggerOnce className="mt-10">
        <div className="flex flex-wrap justify-start gap-8  ">
          <div className="flex flex-col items-center gap-[13.846px] w-[120px] pb-[13.846px] bg-[#FFF] rounded-2xl">
            <div className="flex flex-col items-center gap-[13.846px] w-[120px] pb-[13.846px] bg-[#FFF] rounded-2xl">
                
              <div className="flex justify-center items-center p-[12.846px_23.077px_14.538px_25.923px] w-[120px] h-[70px] bg-[#d6d6d6] rounded-t-xl">
                <h1 className="font-bold text-2xl text-center text-[#303030]">
                  {now.format("M")} сар
                </h1>
              </div>

              <div className="flex flex-col justify-center items-center mt-[40px]">
                <h1 className="font-bold text-3xl text-center text-black">
                  4 дахь
                </h1>

                <h1 className="font-bold text-2xl text-center text-[#bab8b8] mt-[20px]">
                  Өдөр
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[80%] ">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/collections/scrollaw.jpg"
                alt="Ticket Background"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
                <h3 className="text-2xl font-bold mb-4">UB Quiz Night</h3>
                <p className="text-lg mb-4">Пүрэв гараг бүр</p>
                <p className="text-lg mb-4">Хаяг: XYZ байр</p>
                <p className="text-lg mb-6">Үнэ: 10,000 MNT</p>
                <Button className="w-[100%] sm:w-[100%] h-[50px] from-[#B75CFF] to-[#671AE4]">
                  Тасалбар худалдаж авах
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
};

export default Tickets;
