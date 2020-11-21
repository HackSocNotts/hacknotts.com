import "./src/styles/global.scss";

const scrollTo = id => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 50)
  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10)
  }
}