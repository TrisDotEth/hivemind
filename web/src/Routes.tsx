// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" prerender />
      <Set wrap={ScaffoldLayout} title="Hiveminds" titleTo="hiveminds" buttonLabel="New Hivemind" buttonTo="newHivemind">
        <Route path="/hiveminds/new" page={HivemindNewHivemindPage} name="newHivemind" />
        <Route path="/hiveminds/{id:Int}/edit" page={HivemindEditHivemindPage} name="editHivemind" />
        <Route path="/hiveminds/{id:Int}" page={HivemindHivemindPage} name="hivemind" />
        <Route path="/hiveminds" page={HivemindHivemindsPage} name="hiveminds" />
      </Set>
      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
