import { Footer as DaisyFooter } from 'react-daisyui'
import { Link } from 'react-router-dom'
import ROUTES from '../routes'

export function Footer() {
  return (
    <div className="p-10 bg-neutral text-neutral-content sticky top-[100vh]">
      <DaisyFooter className="md:container mx-auto">
        <div>
          <DaisyFooter.Title>Services</DaisyFooter.Title>
          <Link className="link link-hover" to={ROUTES.index}>
            Index
          </Link>
          <Link className="link link-hover" to={ROUTES.settings}>
            Settings
          </Link>
        </div>
        <div>
          <DaisyFooter.Title>Company</DaisyFooter.Title>
          <Link className="link link-hover" to={ROUTES.about}>
            About
          </Link>
        </div>
        <div></div>
        <div></div>
      </DaisyFooter>
    </div>
  )
}
