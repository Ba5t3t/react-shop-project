export function Header() {
  return (
    <nav className='teal accent-4'>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo center'>
          React Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='!#'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
