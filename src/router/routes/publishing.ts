{
    // path 지정
    path: "/sample",
    // layout 지정
    element: <DefaultLayout />,
    // page 지정
    children: [
      { index: true, element: <Sample /> },
      // { path: "about", element: <About /> },
    ],
  },
  {
    // path 지정
    path: "/user",
    // layout 지정
    element: <DefaultLayout />,
    // page 지정
    children: [
      { index: true, element: <UserManage /> },
      // { path: "about", element: <About /> },
    ],
  },
  {
    path: "/user-inquiry",
    element: <DefaultLayout />,
    children: [{ index: true, element: <UserInquiry /> }],
  },
  {
    path: "/task-manage",
    element: <DefaultLayout />,
    children: [{ index: true, element: <TaskManage /> }],
  },
  {
    path: "/task-register",
    element: <DefaultLayout />,
    children: [{ index: true, element: <TaskRegister /> }],
  },
  {
    // path 지정
    path: "/",
    //layout 지정
    element: <Guide />,
  },