import heroImg from "../assets/hero.svg"

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Bodega boys occupy distillery quinoa Brooklyn. Fixe JOMO DSA messenger bag muggings mintage. Health goth listable fit edison bulb jain pok pok organic shoreditch. Banjo fam cronus hot chicken ramps Helga live-edge. Celiac next level asymmetrical JOMO vape.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  )
}