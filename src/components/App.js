import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import DetailsPage from "pages/DetailsPage";
import NotFoundPage from "pages/NotFoundPage";
import Layout from "components/Layout";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import { StyledCommonWrapper } from "styles/Common.styled";

function App() {
  return (
    <StyledCommonWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<DetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </StyledCommonWrapper>
  );
}

export default App;
