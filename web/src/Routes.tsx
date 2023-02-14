// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import TopnavbarLayout from './layouts/TopnavbarLayout/TopnavbarLayout'
import ThreadPage from './pages/ThreadPage/ThreadPage'

// TODO ADD BACK IN PRERENDERING - The reason it was taken out was because of the Swiper package, if it's not needed prerendering might easily work. Otherwise it looks like changing the version of a swiper dependency...
const Routes = () => {
  return (
    <Router>
      <Route path="/redditprofile" page={RedditprofilePage} name="redditprofile" />
      <Route path="/reddit" page={RedditPage} name="reddit" />
      <Set wrap={TopnavbarLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/be:{name}" page={BePage} name="be" />
        <Route path="/be:{name}/DAO" page={DaoPage} name="dao" />
        <Route path="/add" page={AddAnyonePage} name="addAnyone" />
        <Route path="/hiveminds/new" page={HivemindNewHivemindPage} name="newHivemind" />
        <Route path="/hiveminds/{id:Int}/edit" page={HivemindEditHivemindPage} name="editHivemind" />
        <Route path="/hiveminds/{id:Int}" page={HivemindHivemindPage} name="hivemind" />
        <Route path="/hiveminds" page={HivemindHivemindsPage} name="hiveminds" />
        <Route path="/thread:{threadHash}" page={ThreadPage} name="thread" />

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
