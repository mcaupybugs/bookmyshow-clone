import Header from "./header"

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {<Header></Header>}
        <nav></nav>
        {children}
      </section>
    )
  }