'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '../ui/button'
import { useState, useEffect } from 'react';
  

export default function CosmosPomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [completions, setCompletions] = useState(0);
    useEffect(() => {
      let intervalId: NodeJS.Timeout;

      if (isActive) {
          intervalId = setInterval(() => {
              if (seconds === 0) {
                  if (minutes === 0) {
                      setIsActive(false);
                      setIsBreak((prevIsBreak) => !prevIsBreak);
                      setCompletions((prevCompletions) => prevCompletions + 1);
                      setMinutes(isBreak ? 3 : 2);
                      setSeconds(0);
                      if (completions === 7){
                          setCompletions(0);
                          setMinutes(15);
                          setSeconds(0);
                      }
                      return;
                  }
                  setMinutes((prevMinutes) => prevMinutes - 1);
                  setSeconds(59);
              } else {
                  setSeconds((prevSeconds) => prevSeconds - 1);
              }
          }, 1000);
      }

      return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds, isBreak, completions]);

    

    const startTimer = () => setIsActive(true);
    const stopTimer = () => setIsActive(false);
    const resetTimer = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
    };
  return (
    <Card className='h-full flex flex-col'>
        <CardHeader
         className={`${
          isActive ? "hidden" : ""
        }`}
        >
            <CardTitle className='text-2xl'>
              Start a new Pomodoro? 
            </CardTitle>
        </CardHeader>
        <CardContent className='overflow-y-scroll mx-6 mb-4  space-y-4 py-6 pt-0 w-full flex flex-col flex-grow self-center'>
          <div className={`flex-grow rounded-md flex flex-col items-center justify-center bg-black/10 ${
          isActive ? "mt-6" : ""
        } `}>
            <div className='text-center'>
              <p className={`${
          isActive ? "hidden" : "text-xl"
        }` }>{completions === 7 ? "Long Break" : isBreak ? "Short Break" : "Pomodoro"}:</p>
            <p className={`font-bold ${
          isActive ? "text-7xl" : "text-5xl"
        }` }>
            {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
            </p>
            </div>
          </div>
          <div className='flex space-x-4'>
            <Button className='bg-black/80 w-full' onClick={startTimer} disabled={
              isActive
            }>
              {isActive ? isBreak ? "Have a fun break, USER": "Good Luck, USER!" : 'Start'}
              </Button>
            <Button className='bg-black/80 w-3/4'
            onClick={resetTimer}
            >Reset</Button>
          </div>
        </CardContent>
        
    </Card>
  )
}
