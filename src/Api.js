export const projects = [
    {
      id: "p1",
      avatar: "./images/project1.png",
      isNew: true,
      startDate: "01/2021",
      endDate: "now",
      name: "ETT-Stock",
      url: {
        base: "https://ett-test.herokuapp.com",
        github: "https://github.com/boonyarit86/ETT-Electronic-Stock",
      },
      tools: [
        { toolName: "React", iconName: "logo-react" },
        { toolName: "Node JS", iconName: "logo-nodejs" },
      ],
      description:
        "This website is my graduate project that be built on React and in part of database uses MongoDB as well as Socket.io.",
      theme: "#0f141e"
    },
    {
      id: "p2",
      avatar: "./images/project2.png",
      isNew: true,
      startDate: "11/2021",
      endDate: "now",
      name: "ETT-Shop",
      url: {
        base: "https://ett-shop.web.app",
        github: "https://github.com/boonyarit86/ETT-Shop",
      },
      tools: [
        { toolName: "React", iconName: "logo-react" },
        { toolName: "Firebase", iconName: "logo-firebase" },
      ],
      description:
        "Redesign ETT Co.,Ltd website. For the original site is http://www.ett.co.th.",
      theme: "#fff"
    },
    {
      id: "p3",
      avatar: "./images/project4.png",
      isNew: false,
      startDate: "02/2022",
      endDate: "03/2022",
      name: "Omnifood",
      url: {
        base: "https://omnifood-b7da2.web.app",
        github: "https://github.com/boonyarit86/Omnifood",
      },
      tools: [
        { toolName: "React", iconName: "logo-react" }
      ],
      description:
        "This website is built after learning a course from Udemy. (Course url: https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3)",
      theme: "#0f141e"
    },
    {
      id: "p4",
      avatar: "./images/project3.png",
      isNew: false,
      startDate: "07/2021",
      endDate: "",
      name: "Tesla-Clone",
      url: {
        base: "https://tesla-clone-c5b2a.web.app",
        github: "https://github.com/boonyarit86/Tesla-Clone",
      },
      tools: [
        { toolName: "React", iconName: "logo-react" }
      ],
      description:
        "Build this site by using styled-component.",
      theme: "#0f141e"
    }
  ];