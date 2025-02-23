
import attendanceRegisterApp1 from '../assets/attendanceRegisterApp1.jpg'
import attendanceRegisterApp2 from '../assets/attendanceRegisterApp2.jpg'
import attendanceRegisterApp3 from '../assets/attendanceRegisterApp3.jpg'
import attendanceRegisterApp4 from '../assets/attendanceRegisterApp4.jpg'
import attendanceRegisterApp5 from '../assets/attendanceRegisterApp5.jpg'
import attendanceRegisterApp6 from '../assets/attendanceRegisterApp6.jpg'
import attendanceRegisterApp7 from '../assets/attendanceRegisterApp7.jpg'
import attendanceRegisterApp8 from '../assets/attendanceRegisterApp8.jpg'
import attendanceRegisterApp9 from '../assets/attendanceRegisterApp9.jpg'
import attendanceRegisterApp10 from '../assets/attendanceRegisterApp10.jpg'

import calculatorApp1 from '../assets/calculatorApp1.jpg'
import calculatorApp2 from '../assets/calculatorApp2.jpg'
import calculatorApp3 from '../assets/calculatorApp3.jpg'

import travelApp1 from '../assets/travelApp1.jpg'
import travelApp2 from '../assets/travelApp2.jpg'
import travelApp3 from '../assets/travelApp3.jpg'

import map1 from '../assets/map1.jpg'
import map2 from '../assets/map2.jpg'
import map3 from '../assets/map3.jpg'

import freyja1 from '../assets/freyja1.jpg'
import freyja2 from '../assets/freyja2.jpg'
import freyja3 from '../assets/freyja3.jpg'
import freyja4 from '../assets/freyja4.jpg'

import freyjaVideo from '../assets/freyjaVideo.mp4';
import travelAppVideo from '../assets/travelAppVideo.mp4';
import attendanceRegisterAppVideo from '../assets/attendanceRegisterAppVideo.mp4';
import mapVideo from '../assets/mapVideo.mp4'
import calculatorVideo from '../assets/calculatorAppVideo.mp4'

export const myProjects = [
    {
        _id: 1,
        appName: "Freyja App",
        appImg: freyja1,
        videoUrl: freyjaVideo,
        carousal: [freyja1, freyja2, freyja3, freyja4],
        description: "A full-stack application allowing users to search doctors by department and book appointments. Features include separate login pages and dashboardsfor users, doctors, and admins to manage profiles, appointments, and payments. Integrated Razorpay for secure payments, used Cloudinary for image storage, and Axios for API requests. ",
        reference: "https://github.com/EmeraldSky-x/Freyja "
    },

    {
        _id: 2,
        appName: "Calculator App",
        appImg: calculatorApp1,
        videoUrl: calculatorVideo,
        carousal: [calculatorApp1, calculatorApp2, calculatorApp3],
        description: "This project replicates the look and functionality of Apple's iOS calculator while following clean code principles and best practices for iOS app development.",
        reference: "https://github.com/Miraclevijaylal/CalculatorClone-MVVM"
    },
    {
        _id: 3,
        appName: "Attendance Register App",
        appImg: attendanceRegisterApp3,
        videoUrl: attendanceRegisterAppVideo,
        carousal: [attendanceRegisterApp1, attendanceRegisterApp2, attendanceRegisterApp3, attendanceRegisterApp4, attendanceRegisterApp5, attendanceRegisterApp6, attendanceRegisterApp10, attendanceRegisterApp7, attendanceRegisterApp8, attendanceRegisterApp9],
        description: "The Calendar Register App is a user-friendly  app that integrates FSCalendar for an interactive and visually appealing calendar interface. It allows users to register efficiently while ensuring secure data storage using Core Data. User Authentication & Data Persistence Users can sign up and log in, with their credentials securely stored using Core Data.",
        reference: "https://github.com/Miraclevijaylal/AttendanceRegister-App"
    },
    {
        _id: 4,
        appName: "Trip Booking App",
        appImg: travelApp1,
        videoUrl: travelAppVideo,
        carousal: [travelApp1, travelApp2, travelApp3],
        description: "The APPUI project appears to be a UI-focused iOS application that showcases different user interface (UI) components and design patterns for building visually appealing and user-friendly mobile apps",
        reference: "https://github.com/Miraclevijaylal/APPUI/tree/master/UserInterfaceProject"
    },
    {
        _id: 5,
        appName: "MAP",
        appImg: map1,
        videoUrl: mapVideo,
        carousal: [map1, map2, map3],
        description: "This project showcases essential map-related functionalities, making it a useful reference for developers interested in working with location-based services in iOS applications.",
        reference: "https://github.com/Miraclevijaylal/iOSMapKitProject"
    },
]

