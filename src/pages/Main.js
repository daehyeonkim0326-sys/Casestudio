import BannerSection from "../components/main/BannerSection"
import CategorySection from "../components/main/CategorySection"
import ProductSection from "../components/main/ProductSection"

const Main = ({onAdd}) => {
  return (
    <div className="main-page">
        <BannerSection />
        <CategorySection />
        <ProductSection onAdd={onAdd}/>
    </div>
  )
}

export default Main