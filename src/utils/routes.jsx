import { Route, Routes } from "react-router-dom"
import { HomePage, NewVideoPage } from "../pages"

export const routes =

    <Routes>
        <Route  path='*' element={<Page404 />} />
        <Route path='*' element={<Page404 />} />
        <Route path='*' element={<Page404 />} />

    </Routes>