import Layout from "components/layout/layout";
import PagesNotFound from "pages/NotFound/not-found";
import PagesAbout from "pages/about/about";
import PagesHome from "pages/home/home";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function AppRouter(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PagesHome />} />
                    <Route
                        path="about"
                        element={
                            <Suspense fallback={<>...</>}>
                                <PagesAbout />
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<PagesNotFound />} />
                </Route>
            </Routes>
        </>
    );
}
