const route = (handle, pathname) => {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function'){
    handle[pathname]()
  } else {
    console.log()
  }
}
exports.route = route
