import { VFC } from 'react'
import { Nav } from './Nav';
import { Menu } from './Menu';

interface Props {
  children: React.ReactNode;
}

export const Wrapper: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
