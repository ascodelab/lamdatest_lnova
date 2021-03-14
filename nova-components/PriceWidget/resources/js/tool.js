Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'price-widget',
      path: '/price-widget',
      component: require('./components/Tool'),
    },
  ])
})
