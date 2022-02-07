import MainNavigation from './main-navigation'

function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
