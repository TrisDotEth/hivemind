// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import TopnavbarLayout from './layouts/TopnavbarLayout/TopnavbarLayout'

// TODO ADD BACK IN PRERENDERING - The reason it was taken out was because of the Swiper package, if it's not needed prerendering might easily work. Otherwise it looks like changing the version of a swiper dependency.
const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={TopnavbarLayout}>
        <Private unauthenticated="homeClean">
          <Set wrap={ScaffoldLayout} title="Hiveminds" titleTo="hiveminds" buttonLabel="New Hivemind" buttonTo="newHivemind">
            <Route path="/hiveminds/new" page={HivemindNewHivemindPage} name="newHivemind" />
            <Route path="/hiveminds/{id:Int}/edit" page={HivemindEditHivemindPage} name="editHivemind" />
            <Route path="/hiveminds/{id:Int}" page={HivemindHivemindPage} name="hivemind" />
            <Route path="/hiveminds" page={HivemindHivemindsPage} name="hiveminds" />
          </Set>
        </Private>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/be/{name}" page={HomePage} name="be" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
