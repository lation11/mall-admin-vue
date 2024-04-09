const roleToRoute = {
  coustomer: [
    {
      name: "Product",
    },
    {
      name: "ProductList",
    },
    {
      name: "ProductAdd",
    },
  ],
  admin: [
    {
      name: "Product",
    },
    {
      name: "ProductList",
    },
    {
      name: "ProductAdd",
    },
    {
      name: "Category",
    },
  ],
};

export default function (role, routes) {
  console.log(roleToRoute[role]);
  console.log(role);
  console.log(routes);
  const containRoleRoutes = roleToRoute[role].map((item) => item.name);
  const hasUserRouters = routes.filter((res) => {
    if (containRoleRoutes.indexOf(res.name) !== -1) {
      const isChildren = res.children;
      res.children = isChildren.filter(
        (res) => containRoleRoutes.indexOf(res.name) !== -1
      );
      return true;
    }
  });

  console.log(hasUserRouters);
  return hasUserRouters;
}
