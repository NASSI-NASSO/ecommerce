import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Vente de Fleurs au maroc, pour votre jardin et espace intérieur.</h1>
        <p>Notre boutique en ligne vend des fleurs pour votre jardin ou votre espace intérieur au Maroc. Commandez maintenant et profitez de notre livraison rapide. Nous avons une sélection variée de fleurs et de variétés adaptées à tous les types de sols et climats du pays. Nos produits sont de qualité supérieure et cultivées avec soin pour garantir leur vigueur et leur beauté. De plus, notre site fournit des informations précieuses sur chaque plante, telles que leur exigence en lumière et en eau, leur période de floraison et leur mode de propagation. Nous livrons dans de nombreuses villes du Maroc, y compris Casablanca, Rabat, Sale, Témara, Mohammedia, Tanger, Agadir, Marrakech, leurs environs et bien d’autres encore. Ajoutez une touche florale à votre environnement avec nos produits de qualité supérieure et profitez de notre service client convivial.</p>
        <button>Voir les produits</button>
      </div>

      <div className="hero-image">
        <img src="/Image/flors.jpg" alt="Hero" />
      </div>
    </section>
  );
}
